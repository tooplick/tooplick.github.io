# YGKing 的博客

ygking.top - 基于 Hexo 和 Butterfly 主题的个人博客。

## 本地构建

```bash
npm install
hexo generate
python main.py
```

## 部署

推送到 `main` 分支会自动触发 GitHub Actions：

1. `npm ci` - 安装依赖
2. `hexo generate` - 生成静态文件
3. `python main.py` - 后处理（删除 .htm 文件、替换链接、删除 framework-info）
4. 部署到 GitHub Pages

Cloudflare Pages 也会监听同一个仓库，使用相同的构建步骤自动部署。

## Cloudflare Pages 配置

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 左侧菜单 → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
3. 授权并选择仓库 `tooplick/Cloudfire_pages`
4. 构建设置：
   - **Framework preset**: `Hexo`
   - **Build command**: `npm ci && npx hexo generate && python main.py`
   - **Build output directory**: `public`
5. 环境变量：
   - `NODE_VERSION` = `20`
   - `PYTHON_VERSION` = `3.12`
6. 点击 **Save and Deploy**
7. 部署完成后在 **Custom domains** 绑定 `ygking.top`
