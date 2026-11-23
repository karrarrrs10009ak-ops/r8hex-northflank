'use strict';

// Store secrets in Northflank/GitHub environment settings, never in this file.
const token = process.env.TELEGRAM_BOT_TOKEN || process.env.BOT_TOKEN || '';
const id = process.env.TELEGRAM_ADMIN_ID || process.env.ADMIN_ID || '';

if (!token) {
  throw new Error('Missing TELEGRAM_BOT_TOKEN environment variable.');
}

if (!id) {
  throw new Error('Missing TELEGRAM_ADMIN_ID environment variable.');
}

module.exports = { token, id };
