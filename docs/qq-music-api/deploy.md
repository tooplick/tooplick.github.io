# 部署指南

详细的 Cloudflare Workers 部署步骤。

## 前置要求

- GitHub 账户
- Cloudflare 账户 (免费即可)
- QQ 音乐凭证 (可通过 [qq-music-download](https://github.com/tooplick/qq-music-download) 获取)

## 方式一：Cloudflare Dashboard 部署

### 步骤 1：Fork 仓库

1. 访问 [qq-music-api](https://github.com/tooplick/qq-music-api)
2. 点击右上角 **Fork** 按钮
3. 等待 Fork 完成

### 步骤 2：创建 D1 数据库

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 在左侧菜单选择 **D1 SQL Database**
3. 点击 **Create database**
4. 填写数据库名称：`qq-music-api`
5. 点击 **Create**
6. 复制显示的 **Database ID**

### 步骤 3：创建 Worker

1. 在左侧菜单选择 **Workers & Pages**
2. 点击 **Create**
3. 选择 **Create Worker**
4. 填写名称：`qq-music-api`
5. 点击 **Deploy**

### 步骤 4：连接 Git 仓库

1. 进入刚创建的 Worker
2. 点击 **Settings** → **Build**
3. 点击 **Connect Git repository**
4. 授权 GitHub 访问
5. 选择你 Fork 的 `qq-music-api` 仓库
6. Build command 留空
7. 点击 **Save and Deploy**

### 步骤 5：绑定 D1 数据库

1. 进入 Worker → **Settings** → **Bindings**
2. 点击 **D1 database bindings** → **Add**
3. 填写：
   - Variable name: `DB`
   - D1 database: 选择 `qq-music-api`
4. 点击 **Save**

### 步骤 6：配置凭证

1. 进入 **Settings** → **Variables and Secrets**
2. 点击 **Add**
3. 填写：
   - Type: **Secret**
   - Name: `INITIAL_CREDENTIAL`
   - Value: 凭证 JSON (见下方格式)
4. 点击 **Save and Deploy**

#### 凭证格式

```json
{
    "openid": "你的OpenID",
    "musicid": "你的QQ号",
    "musickey": "你的MusicKey",
    "refresh_key": "你的RefreshKey",
    "login_type": "2",
    "extra_fields": "{'musickeyCreateTime': 0, 'keyExpiresIn': 259200}"
}
```

### 步骤 7：初始化数据库

1. 访问 `https://你的worker名.你的账户.workers.dev/admin`
2. 系统会自动初始化数据库
3. 如果配置了 `INITIAL_CREDENTIAL`，凭证会自动导入

### 步骤 8：绑定自定义域名 (可选)

1. 进入 Worker → **Settings** → **Domains & Routes**
2. 点击 **Add** → **Custom domain**
3. 输入你的域名
4. 按提示配置 DNS

## 方式二：Wrangler CLI 部署

### 安装 Wrangler

```bash
npm install -g wrangler
```

### 登录 Cloudflare

```bash
wrangler login
```

### 克隆仓库

```bash
git clone https://github.com/tooplick/qq-music-api
cd qq-music-api
```

### 创建 D1 数据库

```bash
wrangler d1 create qq-music-api
```

记下输出的 `database_id`。

### 更新配置

编辑 `wrangler.toml`，填入你的 `database_id`：

```toml
[[d1_databases]]
binding = "DB"
database_name = "qq-music-api"
database_id = "你的database_id"
```

### 设置凭证

```bash
wrangler secret put INITIAL_CREDENTIAL
```

粘贴凭证 JSON 后按 Enter。

### 部署

```bash
wrangler deploy
```

## 验证部署

访问以下 URL 验证部署是否成功：

```bash
# 首页 (API 文档)
https://你的域名/

# 凭证状态
https://你的域名/api/credential

# 测试搜索
https://你的域名/api/search?keyword=周杰伦
```

## 常见问题

### Q: 凭证导入失败？

确保 JSON 格式正确，所有字段都有值。

### Q: 搜索返回空结果？

检查凭证是否有效，可能已过期。

### Q: 如何更新凭证？

访问 `/admin` 页面重新初始化。
