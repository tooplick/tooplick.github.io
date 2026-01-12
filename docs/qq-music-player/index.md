# QQ-Music-Player

QQ 音乐 Web 播放器的现代重构版本，专为 **Cloudflare Pages** 打造的纯前端 + Serverless 架构。

## 功能特性

- ✅ **纯前端架构**：静态资源托管在 Cloudflare Pages
- ✅ **Serverless 后端**：使用 Cloudflare Functions 处理 API 代理和请求签名
- ✅ **极致性能**：智能预加载，自动预取下一首歌曲歌词，实现零延迟切换
- ✅ **隐私安全**：通过 Cloudflare 代理请求，隐藏真实 IP
- ✅ **PWA 支持**：Service Worker 离线缓存

## 项目结构

```
.
├── functions/              # Cloudflare Functions (后端代理)
│   └── api/
│       ├── index.js        # 通用 API 代理 (处理 CORS & Cookie)
│       └── lyric_proxy.js  # 歌词请求专用代理
├── js/
│   ├── api/                # API 封装层
│   ├── utils/              # 工具函数
│   └── app.js              # 核心业务逻辑
├── css/                    # 样式文件
├── images/                 # 图片资源
├── index.html              # 应用入口
└── sw.js                   # Service Worker
```

## 快速开始

::: tip 提示
这是一个 Serverless 项目，部署到 Cloudflare Pages 即可使用，无需服务器。
:::

前往 [部署指南](/qq-music-player/deploy) 了解如何部署到 Cloudflare Pages。

## 源代码

- **GitHub**: [tooplick/QQ-Music-Player](https://github.com/tooplick/QQ-Music-Player)
- **许可证**: GPL-3.0
