import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "QQ music api",
  description: "QQ音乐项目文档",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }]
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
          { text: 'QQ Music API', link: '/qq-music-api/' },
          { text: 'Web播放器', link: '/qq-music-player/' },
          { text: 'Nekro插件', link: '/nekro-order-qqmusic/' },
          { text: '下载器', link: '/qq-music-download/' },
        ],
        sidebar: {
          '/qq-music-api/': [
            {
              text: 'QQ Music API',
              items: [
                { text: '介绍', link: '/qq-music-api/' },
                { text: '部署指南', link: '/qq-music-api/deploy' },
                { text: 'API接口', link: '/qq-music-api/api' },
                { text: '凭证获取', link: '/qq-music-api/credential' }
              ]
            }
          ],
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
                { text: '配置说明', link: '/nekro-order-qqmusic/config' },
                { text: 'Web登录', link: '/nekro-order-qqmusic/login' }
              ]
            }
          ],
          '/qq-music-download/': [
            {
              text: 'QQ音乐下载器',
              items: [
                { text: '介绍', link: '/qq-music-download/' },
                { text: '使用指南', link: '/qq-music-download/usage' },
                { text: '配置说明', link: '/qq-music-download/config' }
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
          { text: 'QQ Music API', link: '/en/qq-music-api/' },
          { text: 'Web Player', link: '/en/qq-music-player/' },
          { text: 'Nekro Plugin', link: '/en/nekro-order-qqmusic/' },
          { text: 'Downloader', link: '/en/qq-music-download/' },
        ],
        sidebar: {
          '/en/qq-music-api/': [
            {
              text: 'QQ Music API',
              items: [
                { text: 'Introduction', link: '/en/qq-music-api/' },
                { text: 'Deployment', link: '/en/qq-music-api/deploy' },
                { text: 'API Reference', link: '/en/qq-music-api/api' },
                { text: 'Credentials', link: '/en/qq-music-api/credential' }
              ]
            }
          ],
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
                { text: 'Configuration', link: '/en/nekro-order-qqmusic/config' },
                { text: 'Web Login', link: '/en/nekro-order-qqmusic/login' }
              ]
            }
          ],
          '/en/qq-music-download/': [
            {
              text: 'QQ Music Downloader',
              items: [
                { text: 'Introduction', link: '/en/qq-music-download/' },
                { text: 'Usage Guide', link: '/en/qq-music-download/usage' },
                { text: 'Configuration', link: '/en/qq-music-download/config' }
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
