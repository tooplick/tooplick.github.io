# 部署指南

本项目已针对 Cloudflare Pages 优化，开箱即用。

## 1. Fork 仓库

将项目 Fork 到你的 GitHub 账号：

[前往 GitHub Fork](https://github.com/tooplick/QQ-Music-Player/fork)

## 2. 在 Cloudflare 面板创建项目

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. 选择刚才 Fork 的仓库

## 3. 配置构建设置

| 设置项 | 值 |
|--------|-----|
| Framework preset | `None` |
| Build command | *(留空)* |
| Output directory | `.` |

## 4. 环境变量

目前不需要额外的环境变量。API 代理和加解密逻辑都已内置。

## 5. 部署

点击 **Save and Deploy**，稍等片刻，你的播放器就上线了！

::: info 提示
部署成功后，Cloudflare 会分配一个 `*.pages.dev` 域名，你也可以绑定自定义域名。
:::

## CORS 处理

所有对 `u.y.qq.com` 和 `c.y.qq.com` 的请求都通过 `/functions/api/index.js` 转发，自动处理 CORS 头和 Cookie 转发。
