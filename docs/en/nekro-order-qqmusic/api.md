# API Reference

The plugin provides the following API endpoints for credential management:

## Generate Login QR Code

```http
GET /api/get_qrcode/{type}
```

| Parameter | Description |
|-----------|-------------|
| `type` | Login method: `qq` / `wx` / `mobile` |

## Check Credential Status

```http
GET /api/credential/status
```

Returns whether the current credential is valid.

## Refresh Credential

```http
POST /api/credential/refresh
```

Refresh the current credential's validity period.

## Get Credential Info

```http
GET /api/credential/info
```

Returns detailed information about the current credential.

## Version History

| Version | Changes |
|---------|---------|
| v2.1.1 | Migrated API library locally, added mobile client login support, updated web interface |
| v2.1.0 | Added music card sending |
| v2.0.6 | Fixed cover retrieval failure for songs without album |
| v2.0.5 | Added auto credential refresh, changed plugin to Agent method |
| v2.0.4 | Added cover toggle option |
| v2.0.3 | Added web interface for credential management |
