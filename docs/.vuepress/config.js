module.exports = {
    title: 'GzxNydia',
    description: 'I am iron man',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    themeConfig: {
        nav: [
            {
                text: 'Blog',
                items: [
                    { text: 'JavaScript', link: '/JavaScript/' },
                    { text: 'CSS', link: '/CSS/' },
                    { text: 'HTTP', link: '/HTTP/' },
                    { text: 'Vue', link: '/Vue/' },
                    { text: '小程序', link: '/WX/' },
                ],
            },
            { text: 'Project', link: '/Project/' },
            { text: 'Resume', link: '/Resume/' },
            { text: 'GitHub', link: 'https://github.com/GzxNydia' },
        ],
        sidebar: {
            '/JavaScript/': [
                '',
                'shallow-copy',
                'sort',
                'event-model',
                'inherit',
                'this',
                'event-commission',
                'markdown',
                'qqq',
                'requestAnimationFrame',
                'Browser',
                // 'deep-copy',
                // 'type',
            ],
            '/CSS/': ['', '47css-trick', 'rem', 'clear-float'],
            '/Vue/': [''],
            '/HTTP/': ['', 'security', 'caching', 'status-code', 'XDomain'],
            '/WX/': ['','wxyun'],
        },
    },
    base: '/',
}
