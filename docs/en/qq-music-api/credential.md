# Credentials

How to obtain QQ Music login credentials.

## Method 1: qq-music-download Tool

Use [qq-music-download](https://github.com/tooplick/qq-music-download) to generate credentials.

### Install

```bash
git clone https://github.com/tooplick/qq-music-download
cd qq-music-download
pip install -r requirements.txt
```

### Run Login

```bash
python credential.py
```

### Login Process

1. Select login method: QQ / WeChat / Mobile Client
2. Scan the QR code displayed in terminal
3. Confirm login on your phone
4. Credentials saved to `qqmusic_cred.pkl`

### Export to JSON

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

## Method 2: Nekro Plugin

Use [nekro_order_qqmusic](https://github.com/tooplick/nekro_order_qqmusic) web interface.

1. Visit `http://<server:port>/plugins/GeQian.order_qqmusic`
2. Select login method
3. Scan QR code
4. Credentials saved automatically

## Credential Fields

| Field | Type | Description |
|-------|------|-------------|
| `openid` | string | QQ Music OpenID |
| `musicid` | string | User ID (QQ number) |
| `musickey` | string | Login key (Q_H_L_...) |
| `refresh_key` | string | Refresh token |
| `login_type` | string | Login type: 1=QQ, 2=WeChat |

## Validity

- Credentials valid for ~3 days
- Auto-refresh when < 24 hours remaining
- Cron job checks every hour

## Notes

> ⚠️ Use a **VIP account** for high-quality downloads
