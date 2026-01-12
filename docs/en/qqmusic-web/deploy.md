# Deployment Guide

## Docker One-Click Deployment (Recommended)

### Install from GitHub

```bash
sudo -E bash -c "$(curl -fsSL https://raw.githubusercontent.com/tooplick/qqmusic_web/refs/heads/main/docker/install.sh)"
```

### Install from Cloudflare Proxy

If you have connectivity issues with GitHub, use the edge proxy:

```bash
sudo -E bash -c "$(curl -fsSL https://vpn.ygking.top/https://raw.githubusercontent.com/tooplick/qqmusic_web/refs/heads/main/docker/install-cf.sh)"
```

## Python Deployment

### 1. Clone the Project

```bash
git clone https://github.com/tooplick/qqmusic_web
cd qqmusic_web
```

### 2. Install Dependencies

```bash
pip install -r requirements.txt
```

### 3. Start the Application

```bash
python run.py
```

### 4. Access the Application

| URL | Description |
|-----|-------------|
| `http://localhost:6022` | Main app |
| `http://localhost:6022/admin` | Credential management |

## Data Directories

For Docker deployment, data directories are located in the project folder:

| Directory | Description |
|-----------|-------------|
| `qqmusic_web_data/credential` | Credential files |
| `qqmusic_web_data/music` | Downloaded music files |

## Troubleshooting

If startup fails, try:

```bash
pip install qqmusic-api-python flask aiohttp mutagen
```
