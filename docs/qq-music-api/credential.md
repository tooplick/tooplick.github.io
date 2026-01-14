# 凭证获取

如何获取 QQ 音乐登录凭证。

## 方式一：使用 qq-music-download 工具

推荐使用 [qq-music-download](https://github.com/tooplick/qq-music-download) 工具获取凭证。

### 安装

```bash
git clone https://github.com/tooplick/qq-music-download
cd qq-music-download
pip install -r requirements.txt
```

### 运行登录

```bash
python credential.py
```

### 登录流程

1. 选择登录方式：QQ / 微信 / 手机客户端
2. 使用手机扫描终端显示的二维码
3. 在手机上确认登录
4. 凭证自动保存到 `qqmusic_cred.pkl`

### 导出凭证

登录成功后，凭证会保存在 `qqmusic_cred.pkl` 文件中。你可以使用以下 Python 代码导出为 JSON：

```python
import pickle
import json

with open('qqmusic_cred.pkl', 'rb') as f:
    cred = pickle.load(f)

credential_json = {
    "openid": cred.openid,
    "musicid": str(cred.musicid),
    "musickey": cred.musickey,
    "refresh_key": cred.refresh_key,
    "login_type": str(cred.login_type),
    "extra_fields": "{}"
}

print(json.dumps(credential_json, indent=2))
```

## 方式二：使用 Nekro 插件

如果你使用 [nekro_order_qqmusic](https://github.com/tooplick/nekro_order_qqmusic) 插件，可以通过 Web 界面登录。

1. 访问 `http://<服务器IP:端口>/plugins/GeQian.order_qqmusic`
2. 选择登录方式
3. 扫码完成登录
4. 凭证自动保存

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
> - 请使用 **VIP 账号** 获取凭证，否则无法下载高音质歌曲
> - 凭证包含敏感信息，请妥善保管
> - 不要将凭证提交到公开的 Git 仓库
