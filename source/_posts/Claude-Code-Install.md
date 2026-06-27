---
title: Claude Code 安装教程
date: 2026-06-16 13:46:19
tags: Tutorial
categories: Tools
keywords: Claude-Code-Install
top_img: img/default-top-bg.jpg
copyright_author: https://github.com/tooplick
copyright_author_href: https://github.com/tooplick
copyright_url: https://ygking.top/Claude-Code-Install
---

## 安装教程

### 使用官方脚本安装（推荐）

官方提供了一键安装脚本，根据你的系统选择对应的命令执行：

**macOS、Linux、WSL：**

```bash
curl -fsSL https://claude.ai/install.sh | bash
```

**Windows PowerShell：**

```powershell
irm https://claude.ai/install.ps1 | iex
```

**Windows CMD：**

```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

**Homebrew：**

```bash
brew install --cask claude-code
```

**WinGet：**

```powershell
winget install Anthropic.ClaudeCode
```

安装完成后，验证是否安装成功：

```bash
claude --version
```

如果终端输出了版本号（如 `1.x.x`），说明安装成功：

```
2.1.81 (Claude Code)
```

### 使用 npm 安装（不推荐）

官方目前已不再推荐使用 npm 安装方式，建议优先使用上方的官方脚本。如果确实需要通过 npm 安装，请先确认已安装 Node.js：

```bash
node --version
```

如果输出了版本号（如 `v18.17.0`），说明已安装。如果提示命令不存在，请前往 [nodejs.org](https://nodejs.org) 下载并安装。

确认 Node.js 可用后，执行以下命令安装 Claude Code：

```bash
npm install -g @anthropic-ai/claude-code
```

等待安装完成（可能需要几分钟），然后验证：

```bash
claude --version
```

## Settings

```JSON
{
  "env": {
    "ANTHROPIC_BASE_URL": "https://token-plan-cn.xiaomimimo.com/anthropic",
    "ANTHROPIC_AUTH_TOKEN": "tp-colqbsh8uofcj1or7vkaah3sf716kd9qc4a0ts7eoelkmyjo",
    "ANTHROPIC_MODEL": "mimo-v2.5-pro",
    "ANTHROPIC_DEFAULT_SONNET_MODEL": "mimo-v2.5-pro",
    "ANTHROPIC_DEFAULT_OPUS_MODEL": "mimo-v2.5-pro",
    "ANTHROPIC_DEFAULT_HAIKU_MODEL": "mimo-v2.5-pro"
  },
  "enabledPlugins": {
    "superpowers@claude-plugins-official": true
  },
  "includeCoAuthoredBy": false
}
```