const indexManager = {
    init() {
        this.functions();
        this.listeners();
    },

    functions() {
        new DiscordProfile({
            card: '#rtmonly_iqUtc8',
            avatar: '#rtmonly_iral7L',
            status: {
                indicator: '#rtmonly_dNeUGv',
                text: '#rtmonly_g6F0rZ'
            },
            username: '#rtmonly_YJkflM',
        })

        const playlist = [
            {
                src: '/media/cliche.mp3',
                title: 'cliche',
                artist: '2hollis',
                album: 'whiplash / cliche',
                cover: 'https://lastfm.freetls.fastly.net/i/u/500x500/49e4ff007e6d5571a5512643a1716061.jpg',
                link: 'https://music.apple.com/us/album/cliche/1697377154?i=1697377401'
            },
            {
                src: '/media/trauma.mp3',
                title: 'trauma',
                artist: '2hollis',
                album: 'trauma - Single',
                cover: 'https://lastfm.freetls.fastly.net/i/u/500x500/0da592094fd7bdc8c6eeaf7abb3e245e.jpg',
                link: 'https://music.apple.com/us/album/trauma/1757893006?i=1757893169'
            },
            {
                src: '/media/thx.mp3',
                title: 'THX',
                artist: 'Ken Carson',
                album: 'MORE CHAOS',
                cover: 'https://lastfm.freetls.fastly.net/i/u/770x0/a31caf3cb3151e5320ac4f5c1e946f70.jpg',
                link: 'https://music.apple.com/me/album/thx/1806780313?i=1806780672'
            },
            {
                src: '/media/crank.mp3',
                title: 'CRANK',
                artist: 'Playboi Carti',
                album: 'MUSIC',
                cover: 'https://lastfm.freetls.fastly.net/i/u/500x500/ab1f413532a1dfeda3ad32162db76914.jpg',
                link: 'https://music.apple.com/me/album/crank/1804427542?i=1804427567'
            }
        ];

        new AudioPlayer({
            audio: '#rtmonly_g0cNvD',
            details: {
                cover: '#rtmonly_4lt53l',
                title: '#rtmonly_a6e3Yk',
                artist: '#rtmonly_haRIJ9'
            },
            controls: {
                backward: '#rtmonly_OmLgHD',
                play: '#rtmonly_f25i3N',
                forward: '#rtmonly_xPy4zo'
            },
            timebar: {
                blank: '#rtmonly_ELrtrl',
                fill: '#rtmonly_FvcfT1'
            },
            playlist: playlist
        });
    },

    listeners() {
        $('#rtmonly_roxAlG').on('click', function () {
            let i = $(this).find('i');
            let html = $('html');
            switch (html.attr('data-mode')) {
                case 'dark':
                    html.attr('data-mode', 'light');
                    i.removeClass('fa-sun-bright').addClass('fa-moon');
                    break;
                case 'light':
                    html.attr('data-mode', 'dark');
                    i.removeClass('fa-sun-bright').addClass('fa-moon');
                    break;
                default:
                    html.attr('data-mode', 'dark');
                    i.removeClass('fa-moon').addClass('fa-sun-bright');
                    break;
            }
        });        
    }
}