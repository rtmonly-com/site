const tabNavigation = {
    instances: [],
    create(id, options = {
        onTabSelected: null,
        onTabHovered: null
    }) {
        const $ = jQuery;
        const $container = $(`[data-tab-navigation="${id}"]`);
        if (!$container.length) {
            console.error(`tabNavigation: container with id "${id}" not found`);
            return null;
        }
        const $tabs = $container.find('[data-tab]');
        const $highlight = $container.find('[data-highlight]');
        if (!$tabs.length || !$highlight.length) {
            console.error(`tabNavigation: missing tabs or highlight in container "${id}"`);
            return null;
        }
        const instance = {
            id,
            $container,
            $tabs,
            $highlight,
            options,
            currentIndex: $tabs.index($tabs.filter('.active')) || 0,
            moveHighlight($el) {
                const offset = $el.position();
                this.$highlight.css({
                    width: $el.outerWidth(),
                    left: offset.left
                });
            },
            setActive(indexOrLabel) {
                let $target;
                if (typeof indexOrLabel === 'number') {
                    $target = this.$tabs.eq(indexOrLabel);
                } else {
                    $target = this.$tabs.filter((_, el) => $(el).text().trim() === indexOrLabel);
                }
                if ($target && $target.length) {
                    this.$tabs.removeClass('active');
                    $target.addClass('active');
                    this.currentIndex = this.$tabs.index($target);
                    this.moveHighlight($target);
                    if (typeof this.options.onTabSelected === 'function') {
                        this.options.onTabSelected(this.getActiveLabel(), this.currentIndex, $target);
                    }
                }
            },
            getActiveTab() {
                return this.currentIndex;
            },
            getActiveLabel() {
                return this.$tabs.eq(this.currentIndex).text().trim();
            },
            destroy() {
                this.$tabs.off('.tabNavigation');
                tabNavigation.instances = tabNavigation.instances.filter(inst => inst.id !== this.id);
            },
            initEvents() {
                this.$tabs.on('click.tabNavigation', (e) => {
                    const $el = $(e.currentTarget);
                    this.setActive(this.$tabs.index($el));
                });
                this.$tabs.on('mouseenter.tabNavigation', (e) => {
                    const $el = $(e.currentTarget);
                    this.moveHighlight($el);
                    if (typeof this.options.onTabHovered === 'function') {
                        this.options.onTabHovered($el.text().trim(), this.$tabs.index($el), $el);
                    }
                });
                this.$tabs.on('mouseleave.tabNavigation', () => {
                    const $active = this.$tabs.eq(this.currentIndex);
                    this.moveHighlight($active);
                });
            }
        };
        instance.initEvents();
        setTimeout(() => {
            instance.moveHighlight($tabs.eq(instance.currentIndex));
        }, 100);
        this.instances.push(instance);
        return instance;
    },
    getInstance(id) {
        return this.instances.find(inst => inst.id === id);
    },
    destroy(id) {
        const instance = this.getInstance(id);
        if (instance) {
            instance.destroy();
        }
    }
};