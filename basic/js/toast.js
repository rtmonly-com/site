const toast = {
    create(
        options = {
            title: "",
            message: "",
            timestamp: false,
            duration: 3,
            button: { 
                text: "Close", 
                close: true, 
                onClick: () => {return}, 
            },
        }
    ) {
        const $container = $('.toast-wrapper');
        const tid = Math.floor(Math.random() * 999) + 1;
        if ($container.children().length >= 3) {
            let last = $container.children().last();
            last.addClass('hide');
            setTimeout(() => {
                last.remove();
                this.updateClasses();
            }, 250);
        }
        
        setTimeout(() => {
            const $toast = $('<div>')
                .addClass('toast')
                .attr('data-toast-id', tid)
                .html(`
                <div class="toast-header">
                    <div class="toast-title">${options.title ?? 'Notification'}</div>
                    ${
                        options.button && options.button.text && options.button.onClick 
                            ? `<button class="toast-action">${options.button.text}</button>` 
                            : ''
                    }
                </div>
                <div class="toast-message">${options.message}${options.timestamp ? `, ${new Date().toLocaleTimeString(undefined, {hour: '2-digit',minute: '2-digit',hour12: true})}` : ''}</div>
            `);

            $container.prepend($toast);

            if (options.button && options.button.text && options.button.onClick) {
                $toast.find('.toast-action').on('click', function () {
                    options.button.onClick();
                    if (options.button.close) {
                        $toast.addClass('hide');
                        setTimeout(() => $toast.remove(), 250);
                    }
                });
            }

            this.updateClasses();
            setTimeout(function() {
                $toast.addClass('hide');
                setTimeout(function() {
                    $toast.remove();
                    toast.updateClasses();
                }, 250);
            }, options.duration * 1000);
        }, 250)

        return tid;
    },

    remove(tid) {
        const $toast = $(`.toast[data-toast-id="${tid}"]`);
        if ($toast.length) {
            $toast.addClass('hide');
            setTimeout(() => {
                $toast.remove();
                toast.updateClasses();
            }, 250);
        }
    },

    limit() {
        return new Promise((resolve) => {
            const $container = $('.toast-wrapper');
            let last = $container.children().last();
            last.addClass('hide');
            setTimeout(() => {
                last.remove();
                toast.updateClasses();
                resolve();
            }, 300);
        });
    },

    updateClasses() {
        $('.toast').removeClass('toast-first toast-second toast-third');
        $('.toast:eq(0)').addClass('toast-first');
        $('.toast:eq(1)').addClass('toast-second');
        $('.toast:eq(2)').addClass('toast-third');
    }
}