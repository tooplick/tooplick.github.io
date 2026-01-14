# 部署指南

将 QQ-Music-Player 部署到 Cloudflare Pages。

## 前置要求

- GitHub 账户
- Cloudflare 账户
- QQ 音乐凭证

## 部署步骤

### 1. Fork 仓库

1. 访问 [QQ-Music-Player](https://github.com/tooplick/QQ-Music-Player)
2. 点击 **Fork** 按钮
3. 等待 Fork 完成

### 2. 创建 D1 数据库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. 选择 **Workers & Pages** → **D1**
3. 点击 **Create database**
4. 名称填写：`qqmusic-credentials`
5. 点击 **Create**
6. 记录 **Database ID**

### 3. 创建 Pages 项目

1. 进入 **Workers & Pages**
2. 点击 **Create** → **Pages**
3. 选择 **Connect to Git**
4. 授权 GitHub 访问
5. 选择你 Fork 的仓库
6. 配置构建设置：
   - 构建命令：留空
   - 输出目录：留空
7. 点击 **Save and Deploy**

### 4. 绑定 D1 数据库

1. 进入 Pages 项目
2. 点击 **Settings** → **Functions**
3. 找到 **D1 database bindings**
4. 点击 **Add binding**
5. 填写：
   - Variable name: `DB`
   - D1 database: 选择 `qqmusic-credentials`
6. 点击 **Save**

### 5. 配置初始凭证

1. 进入 **Settings** → **Environment variables**
2. 点击 **Add variable**
3. 填写：
   - Variable name: `INITIAL_CREDENTIAL`
   - Value: 凭证 JSON
4. 选择 **Encrypt** 加密存储
5. 点击 **Save**

#### 凭证格式

```json
{
    "openid": "你的OpenID",
    "musicid": "你的QQ号",
    "musickey": "你的MusicKey",
    "refresh_key": "你的RefreshKey",
    "login_type": "2",
    "extra_fields": "{}"
}
```

### 6. 重新部署

1. 进入 **Deployments**
2. 点击最新部署的 **...** 菜单
3. 选择 **Retry deployment**

### 7. 验证部署

访问你的 Pages 域名：
```
https://你的项目名.pages.dev
```

首次访问时会自动：
- 初始化 D1 数据库
- 从环境变量导入凭证

## 自定义域名

### 添加自定义域名

1. 进入 Pages 项目 → **Custom domains**
2. 点击 **Set up a custom domain**
3. 输入你的域名
4. 按提示配置 DNS CNAME 记录

### DNS 配置示例

```
类型: CNAME
名称: music (或 @)
目标: 你的项目名.pages.dev
```

## 配置 Cron 任务

凭证自动刷新依赖 Cron 任务。

### 编辑 wrangler.toml

确保 `wrangler.toml` 包含：

```toml
[triggers]
crons = ["0 * * * *"]  # 每小时执行
```

### Cron 作用

- 每小时检查凭证有效期
- 剩余 < 24 小时时自动刷新
- 刷新后更新 D1 数据库

## 常见问题

### Q: 页面显示空白？

检查浏览器控制台是否有错误，可能是凭证未正确导入。

### Q: 歌曲无法播放？

1. 检查凭证是否有效
2. 确认已绑定 D1 数据库
3. 查看 Functions 日志

### Q: 如何更新凭证？

1. 修改环境变量 `INITIAL_CREDENTIAL`
2. 删除 D1 数据库中的旧数据
3. 重新部署触发初始化
