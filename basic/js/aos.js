const aos = {
    init: function() {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const element = $(entry.target);
                const animation = element.data('aos') || 'fade-up';
                let delay = element.data('aos-delay') || 100;
                let parent = element.closest('[data-aos-delay="auto"]');
                let started = 0;

                if (parent.length) {
                    let name = parent.attr('data-aos-group');
                    if (!name) {
                        const id = 'aos-' + Math.floor(10000 + Math.random() * 90000);
                        parent.attr('data-aos-group', id);
                        debug.log(`Group created \`${id}\``, 'info');
                        name = parent.attr('data-aos-group');
                    }

                    let min = parent.data('aos-delay-min') || 100;
                    let accumulated = min;

                    parent.find('[data-aos]').each(function(index) {
                        const childElement = $(this);
                        childElement.attr('data-aos-children', name);
                        const bonusDelay = parseInt(childElement.attr('data-aos-bonus-delay'), 10) || 0;
                        childElement.data('aos-delay', accumulated + bonusDelay);
                        accumulated += min;
                    });

                    delay = element.data('aos-delay');
                }

                if (entry.isIntersecting) {
                    started = performance.now();
                    setTimeout(() => {
                        const duration = element.data('aos-duration') || 800;
                        element.get(0).style.setProperty('animation-duration', duration + 'ms', 'important');
                        element.removeClass('hide').addClass(animation);
                        if (element.is('[data-aos-once]')) {
                            element.one('animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function() {
                                element.get(0).style.removeProperty('animation-duration');
                            });
                        }
                        let completed = performance.now();
                    }, delay);
                }

                if (!element.is('[data-aos-once]')) {
                    element.addClass('hide').removeClass(animation);
                }
            });
        });
        
        const observe = (elements) => {
            elements.each(function() {
                observer.observe(this);
            });
        }

        const elements = [
            $('[data-aos="zoom-in"]'),
            $('[data-aos="zoom-out"]'),
            $('[data-aos="zoom-up"]'),
            $('[data-aos="zoom-down"]'),
            $('[data-aos="fade-in"]'),
            $('[data-aos="fade-out"]'),
            $('[data-aos="fade-up"]'),
            $('[data-aos="fade-down"]'),
            $('[data-aos="fade-left"]'),
            $('[data-aos="fade-right"]')
        ]
        
        elements.forEach(elements => observe(elements));
    }
}
