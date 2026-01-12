# 部署指南

## Docker 一键部署（推荐）

### 从 GitHub 安装

```bash
sudo -E bash -c "$(curl -fsSL https://raw.githubusercontent.com/tooplick/qqmusic_web/refs/heads/main/docker/install.sh)"
```

### 从 Cloudflare 代理安装

如果 GitHub 连接有问题，可以使用边缘代理：

```bash
sudo -E bash -c "$(curl -fsSL https://vpn.ygking.top/https://raw.githubusercontent.com/tooplick/qqmusic_web/refs/heads/main/docker/install-cf.sh)"
```

## Python 部署

### 1. 克隆项目

```bash
git clone https://github.com/tooplick/qqmusic_web
cd qqmusic_web
```

### 2. 安装依赖

```bash
pip install -r requirements.txt
```

### 3. 启动应用

```bash
python run.py
```

### 4. 访问应用

| 地址 | 说明 |
|------|------|
| `http://localhost:6022` | 主应用 |
| `http://localhost:6022/admin` | 凭证管理界面 |

## 配置文件夹

Docker 部署时，数据目录位于项目目录下：

| 目录 | 说明 |
|------|------|
| `qqmusic_web_data/credential` | 凭证文件夹 |
| `qqmusic_web_data/music` | 下载音乐本地目录 |

## 常见问题

如果启动报错，请尝试：

```bash
pip install qqmusic-api-python flask aiohttp mutagen
```
