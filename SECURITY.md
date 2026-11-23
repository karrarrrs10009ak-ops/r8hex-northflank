# Security notes

- Never commit bot tokens, API keys, or `.env` files.
- Configure `TELEGRAM_BOT_TOKEN` and `TELEGRAM_ADMIN_ID` as protected environment variables in the hosting platform.
- The token provided with the source was exposed in plain text. Revoke it with BotFather and replace it before running this service.
- The shipped `server.js` is heavily obfuscated and has not been security-audited or executed as part of packaging. Review it before public deployment.
