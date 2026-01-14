# Deployment Guide

Deploy QQ-Music-Player to Cloudflare Pages.

## Prerequisites

- GitHub account
- Cloudflare account
- QQ Music credentials

## Deployment Steps

### 1. Fork Repository

Fork [QQ-Music-Player](https://github.com/tooplick/QQ-Music-Player)

### 2. Create D1 Database

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Go to **Workers & Pages** → **D1**
3. Click **Create database**
4. Name: `qqmusic-credentials`
5. Note the **Database ID**

### 3. Create Pages Project

1. Go to **Workers & Pages** → **Create** → **Pages**
2. Select **Connect to Git**
3. Authorize GitHub
4. Select your forked repo
5. Build settings: leave empty
6. Click **Save and Deploy**

### 4. Bind D1 Database

1. Go to Pages project → **Settings** → **Functions**
2. Find **D1 database bindings**
3. Add binding:
   - Variable name: `DB`
   - D1 database: `qqmusic-credentials`

### 5. Configure Credentials

1. Go to **Settings** → **Environment variables**
2. Add `INITIAL_CREDENTIAL` with your credential JSON
3. Select **Encrypt**
4. Save

### 6. Redeploy

Trigger redeployment to apply settings.

### 7. Verify

Visit your Pages URL. First visit will:
- Initialize D1 database
- Import credentials from environment variable

## Custom Domain

1. Go to Pages project → **Custom domains**
2. Click **Set up a custom domain**
3. Enter your domain
4. Configure DNS CNAME record

## Troubleshooting

### Blank page?
Check browser console for errors.

### Songs won't play?
1. Check credential validity
2. Verify D1 binding
3. Check Functions logs
