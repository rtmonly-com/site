class AudioPlayer {
    constructor(options) {
        this.$audio = $(options.audio);
        this.$details = {
            cover: $(options.details.cover),
            title: $(options.details.title),
            artist: $(options.details.artist)
        };
        this.$controls = {
            play: $(options.controls.play),
            prev: $(options.controls.backward),
            next: $(options.controls.forward)
        };
        this.$timebar = {
            blank: $(options.timebar.blank),
            fill: $(options.timebar.fill)
        };
        this.playlist = options.playlist || [];
        this.currentTrackIndex = 0;
        this.fadeInDuration = options.fadeInDuration || 1000;
        this.fadeOutDuration = options.fadeOutDuration || 1000;
        this.originalVolume = this.$audio[0].volume;

        this.updateTrackInfo();
        this.initEvents();
        this.preloadCovers();
    }
    initEvents() {
        const self = this;
        this.$controls.play.on('click', function() {
            if (self.$audio[0].paused) {
                self.$audio[0].play();
                self.updatePlayButton(true);
            } else {
                self.$audio[0].pause();
                self.updatePlayButton(false);
            }
        });
        this.$controls.prev.on('click', function() {
            self.switchTrack(self.currentTrackIndex - 1);
        });
        this.$controls.next.on('click', function() {
            self.switchTrack(self.currentTrackIndex + 1);
        });
        this.$audio.on('timeupdate', function() {
            const audioElem = self.$audio[0];
            const progress = (audioElem.currentTime / audioElem.duration) * 100;
            self.$timebar.fill.css('width', progress + '%');
        });
        this.$timebar.blank.on('click', function(e) {
            const rect = e.target.getBoundingClientRect();
            const clickPosition = e.clientX - rect.left;
            const newTime = (clickPosition / rect.width) * self.$audio[0].duration;
            self.$audio[0].currentTime = newTime;
        });
        this.$audio.on('ended', function() {
            self.switchTrack(self.currentTrackIndex + 1);
        });
    }
    fadeOutAudio(duration, callback) {
        const audioElement = this.$audio[0];
        const initialVolume = audioElement.volume;
        const steps = 20;
        const stepTime = duration / steps;
        const stepVolume = initialVolume / steps;
        let currentStep = 0;
        const interval = setInterval(() => {
            currentStep++;
            audioElement.volume = Math.max(0, initialVolume - stepVolume * currentStep);
            if (currentStep >= steps) {
                clearInterval(interval);
                if (typeof callback === 'function') {
                    callback();
                }
            }
        }, stepTime);
    }
    fadeInAudio(duration) {
        const audioElement = this.$audio[0];
        const targetVolume = this.originalVolume;
        const steps = 20;
        const stepTime = duration / steps;
        const stepVolume = targetVolume / steps;
        let currentStep = 0;
        audioElement.volume = 0;
        const interval = setInterval(() => {
            currentStep++;
            audioElement.volume = Math.min(targetVolume, stepVolume * currentStep);
            if (currentStep >= steps) {
                clearInterval(interval);
            }
        }, stepTime);
    }
    switchTrack(newIndex) {
        if (newIndex < 0) {
            newIndex = this.playlist.length - 1;
        } else if (newIndex >= this.playlist.length) {
            newIndex = 0;
        }
        const self = this;
        self.fadeOutAudio(self.fadeOutDuration, function() {
            self.currentTrackIndex = newIndex;
            const track = self.playlist[newIndex];
            self.$audio.attr('src', track.src);
            self.$details.title.text(track.title);
            self.$details.artist.text(track.artist);
            self.$details.cover.attr('src', track.cover);
            self.$details.title.attr('href', track.link);
            self.$audio[0].load();
            self.$audio[0].play();
            self.updatePlayButton(true);
            self.fadeInAudio(self.fadeInDuration);
        });
    }
    updatePlayButton(isPlaying) {
        if (isPlaying) {
            this.$controls.play.removeClass('fa-circle-play').addClass('fa-pause-circle');
        } else {
            this.$controls.play.removeClass('fa-pause-circle').addClass('fa-circle-play');
        }
    }
    updateTrackInfo() {
        if (this.playlist.length > 0) {
            const track = this.playlist[this.currentTrackIndex];
            this.$audio.attr('src', track.src);
            this.$details.title.text(track.title);
            this.$details.artist.text(track.artist);
            this.$details.cover.attr('src', track.cover);
            this.$details.title.attr('href', track.link);
        }
    }
    preloadCovers() {
        this.playlist.forEach(function(track) {
            const img = new Image();
            img.src = track.cover;
        });
    }
}
