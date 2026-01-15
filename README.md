# QQ Music API 项目文档

[![Deploy VitePress](https://github.com/tooplick/tooplick.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/tooplick/tooplick.github.io/actions/workflows/deploy.yml)

基于 VitePress 构建的项目文档网站，支持中英文切换。

🌐 **在线访问**: [https://tooplick.github.io](https://tooplick.github.io)

## 包含项目

| 项目 | 描述 | 仓库 |
|------|------|------|
| **QQ Music API** | Cloudflare Workers QQ音乐API | [GitHub](https://github.com/tooplick/qq-music-api) |
| **QQ Music Player** | QQ音乐Web播放器 Serverless版本 | [GitHub](https://github.com/tooplick/QQ-Music-Player) |
| **Nekro QQ音乐点歌** | Nekro Agent QQ音乐点歌插件 | [GitHub](https://github.com/tooplick/nekro_order_qqmusic) |
| **QQ音乐下载器** | Python CLI 下载工具 | [GitHub](https://github.com/tooplick/qq-music-download) |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建
npm run docs:build
```

## 技术栈

- [VitePress](https://vitepress.dev/) v2.0
- 支持 i18n 中英文切换
- GitHub Actions 自动部署

## 部署

### GitHub Pages

1. Fork 本仓库
2. 进入 **Settings** → **Pages** → **Source** 选择 **GitHub Actions**
3. 推送代码后自动部署

### Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages** → **Create** → **Pages** → **Connect to Git**
3. 选择仓库并配置：
   - **Framework preset**: `None`
   - **Build command**: `npm run docs:build`
   - **Build output directory**: `docs/.vitepress/dist`
4. 点击 **Save and Deploy**

## 许可证

MIT License