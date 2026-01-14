# Local Development

Develop and debug QQ-Music-Player locally.

## Prerequisites

### Node.js

```bash
node --version
# v18.0.0 or higher
```

### Wrangler CLI

```bash
npm install -g wrangler
wrangler login
```

## Setup

### Clone Project

```bash
git clone https://github.com/tooplick/QQ-Music-Player
cd QQ-Music-Player
```

### Create Local D1 Database

```bash
wrangler d1 create qqmusic-credentials --local
```

### Configure wrangler.toml

```toml
name = "qq-music-player"
compatibility_date = "2024-01-01"

[[d1_databases]]
binding = "DB"
database_name = "qqmusic-credentials"
database_id = "local"
```

### Set Local Credentials

Create `.dev.vars` file:

```bash
INITIAL_CREDENTIAL={"openid":"xxx","musicid":"xxx",...}
```

## Start Dev Server

```bash
wrangler pages dev .
```

Visit `http://localhost:8788`

## Project Structure

```
QQ-Music-Player/
├── functions/          # Cloudflare Functions
│   └── api/
├── js/
│   ├── api/           # Frontend API wrappers
│   ├── utils/         # Utilities
│   └── app.js         # Main app
├── css/
├── index.html
├── sw.js              # Service Worker
└── wrangler.toml
```

## Tips

- Functions logs appear in terminal
- Hot reload for HTML/CSS/JS changes
- Use Network panel to debug API calls

## Common Issues

### Can't connect to D1?
Use `wrangler pages dev` not direct HTML file.

### API returns 401?
Check credentials in `.dev.vars`.

### Service Worker cache issues?
Clear browser cache or disable in DevTools.
