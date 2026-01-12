# 本地开发

虽然这是一个 Serverless 项目，但你可以使用 `wrangler` 在本地完美模拟。

## 前置要求

- Node.js (推荐 v18+)
- Wrangler CLI

## 安装 Wrangler

```bash
npm install -g wrangler
```

## 启动开发服务器

```bash
# 克隆项目
git clone https://github.com/tooplick/QQ-Music-Player.git
cd QQ-Music-Player

# 安装依赖
npm install

# 启动开发服务器
wrangler pages dev .
```

这将在本地启动一个开发服务器（通常是 `http://localhost:8788`），同时模拟 Cloudflare Functions。

## 项目结构说明

| 目录/文件 | 说明 |
|-----------|------|
| `functions/api/` | Cloudflare Functions，处理 API 代理 |
| `js/api/` | 前端 API 封装层 |
| `js/utils/` | 工具函数，包含解密模块 |
| `js/app.js` | 核心业务逻辑 |
| `sw.js` | Service Worker，处理离线缓存 |
