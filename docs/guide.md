# QQ Music API

基于 Cloudflare Workers + D1 数据库的 QQ 音乐 API 服务。

**🌐 在线演示**: [api.ygking.top](https://api.ygking.top)

## 🌟 功能特性

- 🚀 **Serverless 架构** - Cloudflare Workers 全球边缘部署
- 🗄️ **D1 数据库** - 凭证持久化存储
- 🔄 **自动刷新** - Cron 定时任务自动刷新凭证
- 📝 **歌词解密** - 支持逐字歌词、翻译、罗马音
- 🎵 **完整 API** - 搜索、歌曲、歌词、专辑、歌单、歌手、排行榜
- 🖼️ **智能封面** - 多尺寸封面获取，自动验证可用性

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
| `/api/song/url` | 获取歌曲播放链接 (支持 MP3/FLAC) |
| `/api/song/detail` | 获取歌曲详情 |
| `/api/song/cover` | 获取歌曲封面 (多尺寸) |
| `/api/lyric` | 获取歌词 (支持 QRC 逐字/翻译/罗马音) |
| `/api/album` | 获取专辑详情 |
| `/api/playlist` | 获取歌单详情 |
| `/api/singer` | 获取歌手信息 |
| `/api/top` | 获取排行榜 |
| `/api/credential` | 查看凭证状态 |

👉 完整参数请看 [API 接口文档](./api) · 代码示例请看 [调用示例](./examples)

## 🔐 凭证说明

凭证可通过 [qq-music-download](https://github.com/tooplick/qq-music-download) 工具获取。

👉 详见 [凭证获取](./credential)

## 🔗 相关链接

- [GitHub 仓库](https://github.com/tooplick/qq-music-api)
- [在线演示](https://api.ygking.top)

## ⚠️ 免责声明

本项目仅供学习研究使用，请支持正版音乐。
