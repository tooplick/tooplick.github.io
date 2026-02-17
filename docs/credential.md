# 凭证获取

如何获取 QQ 音乐登录凭证。

## 使用 qq-music-download 工具

推荐使用 [qq-music-download](https://github.com/tooplick/qq-music-download) 工具获取凭证。

### 安装

```bash
git clone https://github.com/tooplick/qq-music-download
cd qq-music-download
pip install -r requirements.txt
```

### 运行凭证管理工具

```bash
python credential.py
```

### 登录流程

1. 首次运行时，工具会提示选择登录方式：
   - `1` - QQ 二维码
   - `2` - 微信二维码
2. 使用手机扫描终端显示的二维码
3. 在手机上确认登录
4. 凭证自动保存到 `qqmusic_cred.pkl`

### 导出凭证 JSON

登录成功后，在管理菜单中选择 **4. 导出凭证到JSON**，工具会自动将凭证导出为 JSON 文件：

```
请选择操作:
1. 检查凭证状态
2. 手动刷新凭证
3. 显示凭证信息
4. 导出凭证到JSON    ← 选择此项
5. 重新登录
6. 退出
```

凭证会导出到当前目录，文件名格式为 `qqmusic_credential_<时间戳>.json`。

将导出的 JSON 内容粘贴到 Cloudflare Workers 的 `INITIAL_CREDENTIAL` Secret 中即可。

## 凭证字段说明

| 字段 | 类型 | 说明 |
|------|------|------|
| `openid` | string | QQ 音乐 OpenID |
| `musicid` | string | 用户 ID (QQ号) |
| `musickey` | string | 登录密钥 (以 Q_H_L_ 开头) |
| `refresh_key` | string | 刷新令牌 |
| `login_type` | string | 登录类型: 1=QQ, 2=微信 |
| `extra_fields` | string | 额外字段 (JSON 字符串) |

## 凭证有效期

- 凭证有效期约为 3 天
- 系统会在有效期剩余不足 24 小时时自动刷新
- 使用 Cron 定时任务每小时检查

## 注意事项

> ⚠️ **重要提示**
>
> - 请使用 **VIP 账号** 获取凭证，否则无法下载vip歌曲
> - 凭证包含敏感信息，请妥善保管
> - 不要将凭证提交到公开的 Git 仓库
