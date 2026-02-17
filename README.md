# QQ Music API 文档

[![Deploy VitePress](https://github.com/tooplick/tooplick.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/tooplick/tooplick.github.io/actions/workflows/deploy.yml)

基于 VitePress 构建的 [QQ Music API](https://github.com/tooplick/qq-music-api) 项目文档和调用示例。

🌐 **在线访问**: [https://tooplick.github.io](https://tooplick.github.io)

## 文档内容

| 页面 | 说明 |
|------|------|
| **介绍** | 项目功能特性和 API 概览 |
| **部署指南** | Cloudflare Dashboard / Wrangler CLI 两种部署方式 |
| **凭证获取** | 如何获取 QQ 音乐登录凭证 |
| **API 接口** | 完整的 API 参数和响应文档 |
| **调用示例** | cURL / JavaScript / Python 调用示例 |

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