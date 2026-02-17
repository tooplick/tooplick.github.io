import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "QQ Music API",
  description: "基于 Cloudflare Workers 的 QQ 音乐 API 服务文档",
  head: [
    ['link', { rel: 'icon', href: '/favicon.png', type: 'image/png' }]
  ],

  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '快速上手', link: '/guide' },
      { text: 'API 接口', link: '/api' },
      { text: '调用示例', link: '/examples' },
      { text: '部署指南', link: '/deploy' },
    ],

    sidebar: [
      {
        text: '开始',
        items: [
          { text: '介绍', link: '/guide' },
          { text: '部署指南', link: '/deploy' },
          { text: '凭证获取', link: '/credential' },
        ]
      },
      {
        text: '使用',
        items: [
          { text: 'API 接口文档', link: '/api' },
          { text: '调用示例', link: '/examples' },
        ]
      }
    ],

    outline: { label: '页面导航' },
    docFooter: { prev: '上一页', next: '下一页' },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tooplick/qq-music-api' }
    ],
    footer: {
      message: '仅供学习研究使用，请支持正版音乐',
      copyright: 'Copyright © 2026 搁浅'
    },
    search: {
      provider: 'local'
    }
  }
})
