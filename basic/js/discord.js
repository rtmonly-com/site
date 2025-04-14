class DiscordProfile {
    constructor(options) {
        this.$card = $(options.card)
        this.$avatar = $(options.avatar)
        this.$username = $(options.username)
        this.$status = {
            indicator: $(options.status.indicator),
            text: $(options.status.text)
        }
        this.initEvents();
        this.updateProfile(false)
    }
    initEvents() {
        const self = this;
        setInterval(() => {
            self.updateProfile(true);
        }, 3000)
    }
    updateProfile(revealed = false) {
        const self = this;
        (async () => {
            const response = await requests.get('/api/status/get');
            self.$avatar.attr('src', response.discord.avatar.url);
            self.$username.attr('href', `https://discord.com/users/${response.discord.id}`);
            self.$username.text(response.discord.username);
            let status;
            if (revealed) {
                self.$status.indicator.removeClass(`${self.$status.indicator.data('status')}`);
            }
            switch (response['discord']['status']) {
                case 'online':
                    status = 'Online';
                    self.$status.indicator.data('status', 'success')
                    self.$status.indicator.addClass('success');
                    break;
                case 'idle':
                    status = 'Away';
                    self.$status.indicator.data('status', 'warning')
                    self.$status.indicator.addClass('warning');
                    break;
                case 'dnd':
                    status = 'Do Not Disturb';
                    self.$status.indicator.data('status', 'danger')
                    self.$status.indicator.addClass('danger');
                    break;
                default:
                    status = 'Offline';
                    self.$status.indicator.data('status', 'hide')
                    self.$status.indicator.addClass('hide');
                    break;
            }
            if (response['discord']['activities'].length > 0) {
                const activities = response['discord']['activities'];
                const hasSpotify = activities.some(activity => activity.name === 'Spotify' || activity.type === 2);
                const hasCustomStatus = activities.some(activity => activity.type === 4);
                const hasGame = activities.some(activity => activity.type === 0);
                const hasWatching = activities.some(activity => activity.type === 3);
                const hasStreaming = activities.some(activity => activity.type === 1);
            
                if (hasSpotify) {
                    self.$status.text.html(`<i class="fab fa-spotify prefix"></i><span>Listening to Spotify</span>`);
                } else if (hasGame) {
                    const game = activities.find(a => a.type === 0);
                    self.$status.text.html(`<i class="fas fa-gamepad prefix"></i><span>Playing ${game.name}</span>`);
                } else if (hasWatching) {
                    const watching = activities.find(a => a.type === 3);
                    self.$status.text.html(`<i class="fas fa-eye prefix"></i><span>Watching ${watching.name}</span>`);
                } else if (hasStreaming) {
                    const streaming = activities.find(a => a.type === 1);
                    self.$status.text.html(`<i class="fas fa-video prefix"></i><span>Streaming ${streaming.name}</span>`);
                } else if (hasCustomStatus) {
                    const custom = activities.find(a => a.type === 4);
                    self.$status.text.text(custom.state || 'Custom Status');
                } else {
                    self.$status.text.text(status);
                }
            } else {
                self.$status.text.text(status);
            }
            if (!revealed) {
                setTimeout(() => {
                    self.$card.removeClass('hide');
                }, 300)   
            }
        })();
    }    
}
