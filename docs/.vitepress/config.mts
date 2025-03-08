import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    title: "🔮 跃迁奇点",
    description: "The docs for Quantum Warp, a toolbox for hoyo games",
    
    head: [
        ['link', { rel: 'icon', href: '/icon.png' }]
    ],

    markdown: {
        math: true
    },
    cleanUrls: true,

    ignoreDeadLinks: true,

    themeConfig: {
        search: {
            provider: 'local'
        },

        aside: true,
        outline: {
            level: 3,
            label: "页面导航",
        },

        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: '主页', link: '/' },
            { text: '使用文档', link: '/about' }
        ],

        sidebar: [
            {
                text: '快速开始',
                items: [
                    { text: '关于「跃迁奇点」', link: '/about' },
                    { text: '安装', link: '/getting_start/install' }
                ]
            }
        ],

        socialLinks: [
            { icon: 'github', link: 'https://github.com/flipwind/QuantumWarp' }
        ],

        footer: {
            copyright: `© 2025 flipwind. All Rights Reserved.`,
        },
    }


})
