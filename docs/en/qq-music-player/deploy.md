# Deployment Guide

This project is optimized for Cloudflare Pages and works out of the box.

## 1. Fork the Repository

Fork the project to your GitHub account:

[Go to GitHub Fork](https://github.com/tooplick/QQ-Music-Player/fork)

## 2. Create Project in Cloudflare Dashboard

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. Select the forked repository

## 3. Configure Build Settings

| Setting | Value |
|---------|-------|
| Framework preset | `None` |
| Build command | *(leave empty)* |
| Output directory | `.` |

## 4. Environment Variables

No additional environment variables needed. API proxy and encryption logic are built-in.

## 5. Deploy

Click **Save and Deploy**. After a moment, your player will be online!

::: info
After successful deployment, Cloudflare will assign a `*.pages.dev` domain. You can also bind a custom domain.
:::

## CORS Handling

All requests to `u.y.qq.com` and `c.y.qq.com` are forwarded through `/functions/api/index.js`, which automatically handles CORS headers and Cookie forwarding.
