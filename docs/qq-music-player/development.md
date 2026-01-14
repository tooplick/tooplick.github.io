# 本地开发

在本地环境开发和调试 QQ-Music-Player。

## 环境准备

### 安装 Node.js

确保已安装 Node.js 18+：

```bash
node --version
# v18.0.0 或更高
```

### 安装 Wrangler CLI

```bash
npm install -g wrangler
```

### 登录 Cloudflare

```bash
wrangler login
```

## 克隆项目

```bash
git clone https://github.com/tooplick/QQ-Music-Player
cd QQ-Music-Player
```

## 创建本地 D1 数据库

```bash
wrangler d1 create qqmusic-credentials --local
```

## 配置 wrangler.toml

编辑 `wrangler.toml`：

```toml
name = "qq-music-player"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "qqmusic-credentials"
database_id = "local"  # 本地开发可以填任意值
```

## 设置本地凭证

创建 `.dev.vars` 文件（不要提交到 Git）：

```bash
INITIAL_CREDENTIAL={"openid":"xxx","musicid":"xxx","musickey":"xxx","refresh_key":"xxx","login_type":"2","extra_fields":"{}"}
```

## 启动开发服务器

```bash
wrangler pages dev .
```

访问 `http://localhost:8788`

## 项目结构

```
QQ-Music-Player/
├── functions/          # Cloudflare Functions
│   └── api/
│       ├── index.js    # API 代理
│       ├── credential.js
│       ├── refresh.js
│       └── lyric_proxy.js
├── js/
│   ├── api/            # 前端 API 封装
│   ├── utils/          # 工具函数
│   └── app.js          # 主应用
├── css/
│   └── style.css
├── index.html          # 入口页面
├── sw.js               # Service Worker
└── wrangler.toml
```

## 开发技巧

### 查看 Functions 日志

开发服务器会在终端显示 Functions 的请求日志。

### 热重载

修改文件后自动刷新（HTML/CSS/JS）。

### 调试 API

使用浏览器开发者工具的 Network 面板查看 API 请求。

## 代码规范

### JavaScript

- 使用 ES6+ 语法
- 异步操作使用 async/await
- 命名使用 camelCase

### CSS

- 使用 CSS 变量定义主题色
- 移动端优先设计

## 常见问题

### Q: 本地无法连接 D1？

确保使用 `wrangler pages dev` 而不是直接打开 HTML 文件。

### Q: API 返回 401？

检查 `.dev.vars` 中的凭证是否正确。

### Q: Service Worker 缓存问题？

清除浏览器缓存或在开发者工具中禁用缓存。
