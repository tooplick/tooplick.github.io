# QQ Music API

基于 Cloudflare Workers + D1 数据库的 QQ 音乐 API 服务。

**🌐 在线演示**: [api.ygking.top](https://api.ygking.top)

## 🌟 功能特性

- 🚀 **Serverless 架构** - Cloudflare Workers 全球边缘部署
- 🗄️ **D1 数据库** - 凭证持久化存储
- 🔄 **自动刷新** - Cron 定时任务自动刷新凭证
- 📝 **歌词解密** - 自动解密 QRC/LRC 格式
- 🎵 **完整 API** - 搜索、歌曲、歌词、专辑、歌单、歌手、排行榜

## 🚀 快速开始

1. Fork [GitHub 仓库](https://github.com/tooplick/qq-music-api)
2. 创建 D1 数据库
3. 部署到 Cloudflare Workers
4. 配置凭证

👉 详细步骤请看 [部署指南](./deploy)

## 📡 API 概览

| 接口 | 说明 |
|------|------|
| `/api/search` | 搜索歌曲/歌手/专辑/歌单 |
| `/api/song/url` | 获取歌曲播放链接 |
| `/api/song/detail` | 获取歌曲详情 |
| `/api/lyric` | 获取歌词 (自动解密) |
| `/api/album` | 获取专辑详情 |
| `/api/playlist` | 获取歌单详情 |
| `/api/singer` | 获取歌手信息 |
| `/api/top` | 获取排行榜 |

👉 完整参数请看 [API 接口文档](./api)

## 🔐 凭证说明

凭证可通过以下方式获取：
- [qq-music-download](https://github.com/tooplick/qq-music-download) 工具
- [nekro_order_qqmusic](/nekro-order-qqmusic/) 插件 Web 界面

👉 详见 [凭证获取](./credential)

## 🔗 相关链接

- [GitHub 仓库](https://github.com/tooplick/qq-music-api)
- [在线演示](https://api.ygking.top)

## ⚠️ 免责声明

本项目仅供学习研究使用，请支持正版音乐。
