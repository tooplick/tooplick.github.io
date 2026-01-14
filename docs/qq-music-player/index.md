# QQ-Music-Player

QQ 音乐 Web 播放器 Serverless 版本，基于 Cloudflare Pages。

**🌐 在线演示**: [qq.ygking.top](https://qq.ygking.top)

## 🌟 功能特性

- ✅ **纯前端架构** - 静态资源托管在 Cloudflare Pages
- ✅ **Serverless 后端** - Cloudflare Functions 处理 API
- ✅ **D1 凭证存储** - 安全存储在 D1 数据库
- ✅ **智能预加载** - 自动预取下一首歌曲歌词
- ✅ **PWA 支持** - 可安装为桌面应用
- ✅ **自动刷新** - Cron 自动刷新凭证

## 🚀 快速开始

1. Fork [GitHub 仓库](https://github.com/tooplick/QQ-Music-Player)
2. 创建 D1 数据库 `qqmusic-credentials`
3. 创建 Pages 项目并绑定 D1
4. 配置 `INITIAL_CREDENTIAL` 环境变量

👉 详细步骤请看 [部署指南](./deploy)

## 💻 开发

```bash
npm install -g wrangler
wrangler pages dev .
```

👉 详见 [本地开发](./development)

## 📁 项目结构

```
QQ-Music-Player/
├── functions/          # Cloudflare Functions
├── js/                 # 前端脚本
├── css/                # 样式
├── index.html          # 入口
└── sw.js               # Service Worker
```

## 🔐 凭证

凭证获取方法请参考 [qq-music-api 凭证获取](/qq-music-api/credential)

## 🔗 相关链接

- [在线演示](https://qq.ygking.top)
- [GitHub 仓库](https://github.com/tooplick/QQ-Music-Player)
- [QQ Music API](/qq-music-api/)

## ⚠️ 免责声明

本项目仅供学习研究使用，请支持正版音乐。
