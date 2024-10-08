#!/usr/bin/env node
const crypto = require('crypto');
const DEFAULT_LENGTH = 12;
const input = process.argv[2];
const length = input && !isNaN(input) ? parseInt(input) : DEFAULT_LENGTH;
const randomHash = crypto.randomBytes(32).toString('hex').slice(0, length);
console.log(`${randomHash}`);
