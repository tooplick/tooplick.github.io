# Deployment Guide

Deploy QQ Music API to Cloudflare Workers.

## Prerequisites

- GitHub account
- Cloudflare account (free tier works)
- QQ Music credentials

## Method 1: Cloudflare Dashboard

### Step 1: Fork Repository

1. Visit [qq-music-api](https://github.com/tooplick/qq-music-api)
2. Click **Fork** button
3. Wait for fork to complete

### Step 2: Create D1 Database

1. Login to [Cloudflare Dashboard](https://dash.cloudflare.com)
2. Go to **D1 SQL Database**
3. Click **Create database**
4. Name: `qq-music-api`
5. Click **Create**
6. Copy the **Database ID**

### Step 3: Create Worker

1. Go to **Workers & Pages**
2. Click **Create** → **Create Worker**
3. Name: `qq-music-api`
4. Click **Deploy**

### Step 4: Connect Git Repository

1. Go to Worker → **Settings** → **Build**
2. Click **Connect Git repository**
3. Authorize GitHub access
4. Select your forked repository
5. Leave Build command empty
6. Click **Save and Deploy**

### Step 5: Bind D1 Database

1. Go to **Settings** → **Bindings**
2. Click **D1 database bindings** → **Add**
3. Variable name: `DB`
4. D1 database: Select `qq-music-api`
5. Click **Save**

### Step 6: Configure Credentials

1. Go to **Settings** → **Variables and Secrets**
2. Click **Add**
3. Type: **Secret**
4. Name: `INITIAL_CREDENTIAL`
5. Value: Your credential JSON
6. Click **Save and Deploy**

### Step 7: Initialize Database

Visit `https://your-domain/admin` to initialize the database.

## Method 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Clone repo
git clone https://github.com/tooplick/qq-music-api
cd qq-music-api

# Create D1 database
wrangler d1 create qq-music-api

# Update wrangler.toml with database_id

# Set credential secret
wrangler secret put INITIAL_CREDENTIAL

# Deploy
wrangler deploy
```

## Verify Deployment

```bash
# Homepage
https://your-domain/

# Credential status
https://your-domain/api/credential

# Test search
https://your-domain/api/search?keyword=test
```
