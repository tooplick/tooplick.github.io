# API 接口

插件提供以下 API 接口用于凭证管理：

## 生成登录二维码

```http
GET /api/get_qrcode/{type}
```

| 参数 | 说明 |
|------|------|
| `type` | 登录方式：`qq` / `wx` / `mobile` |

## 检查凭证状态

```http
GET /api/credential/status
```

返回当前凭证是否有效。

## 刷新凭证

```http
POST /api/credential/refresh
```

刷新现有凭证的有效期。

## 获取凭证信息

```http
GET /api/credential/info
```

返回当前凭证的详细信息。

## 版本历史

| 版本 | 更新内容 |
|------|----------|
| v2.1.1 | 迁移 API 库至本地，支持手机客户端登录，更新 Web 界面 |
| v2.1.0 | 新增发送音乐卡片 |
| v2.0.6 | 修复无专辑歌曲获取封面失败 |
| v2.0.5 | 新增自动刷新凭证，更改插件为 Agent 方法 |
| v2.0.4 | 新增封面开关 |
| v2.0.3 | 添加 Web 界面用于凭证管理 |
