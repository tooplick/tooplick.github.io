import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "QQ music api",
  description: "QQ音乐项目文档",
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.png', type: 'image/png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: "QQ music api",
      description: "tooplick的QQ音乐相关项目文档",
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
        ],
        sidebar: {
          '/qq-music-player/': [
            {
              text: 'QQ-Music-Player',
              items: [
                { text: '介绍', link: '/qq-music-player/' },
                { text: '部署指南', link: '/qq-music-player/deploy' },
                { text: '本地开发', link: '/qq-music-player/development' }
              ]
            }
          ],
          '/nekro-order-qqmusic/': [
            {
              text: 'Nekro QQ音乐点歌',
              items: [
                { text: '介绍', link: '/nekro-order-qqmusic/' },
                { text: 'API接口', link: '/nekro-order-qqmusic/api' }
              ]
            }
          ],
          '/qq-music-download/': [
            {
              text: 'QQ音乐下载器',
              items: [
                { text: '介绍', link: '/qq-music-download/' },
                { text: '使用指南', link: '/qq-music-download/usage' }
              ]
            }
          ],
          '/qqmusic-web/': [
            {
              text: 'QQMusic Web',
              items: [
                { text: '介绍', link: '/qqmusic-web/' },
                { text: '部署指南', link: '/qqmusic-web/deploy' },
                { text: 'API接口', link: '/qqmusic-web/api' }
              ]
            }
          ]
        },
        outline: { label: '页面导航' },
        docFooter: { prev: '上一页', next: '下一页' }
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      link: '/en/',
      title: "QQ music api",
      description: "Documentation for QQ Music related projects",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
        ],
        sidebar: {
          '/en/qq-music-player/': [
            {
              text: 'QQ-Music-Player',
              items: [
                { text: 'Introduction', link: '/en/qq-music-player/' },
                { text: 'Deployment', link: '/en/qq-music-player/deploy' },
                { text: 'Development', link: '/en/qq-music-player/development' }
              ]
            }
          ],
          '/en/nekro-order-qqmusic/': [
            {
              text: 'Nekro QQ Music Plugin',
              items: [
                { text: 'Introduction', link: '/en/nekro-order-qqmusic/' },
                { text: 'API Reference', link: '/en/nekro-order-qqmusic/api' }
              ]
            }
          ],
          '/en/qq-music-download/': [
            {
              text: 'QQ Music Downloader',
              items: [
                { text: 'Introduction', link: '/en/qq-music-download/' },
                { text: 'Usage Guide', link: '/en/qq-music-download/usage' }
              ]
            }
          ],
          '/en/qqmusic-web/': [
            {
              text: 'QQMusic Web',
              items: [
                { text: 'Introduction', link: '/en/qqmusic-web/' },
                { text: 'Deployment', link: '/en/qqmusic-web/deploy' },
                { text: 'API Reference', link: '/en/qqmusic-web/api' }
              ]
            }
          ]
        },
        outline: { label: 'On this page' },
        docFooter: { prev: 'Previous', next: 'Next' }
      }
    }
  },

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/tooplick' }
    ],
    footer: {
      message: 'For learning and research purposes only',
      copyright: 'Copyright © 2026 搁浅'
    },
    search: {
      provider: 'local'
    }
  }
})
