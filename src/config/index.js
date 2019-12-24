require('dotenv').config();
const dotenv = require('dotenv').config();

console.log('dotenv', dotenv);

const config = {
  dev: process.env.NODE_ENV !== 'production',
  port: process.env.PORT || 3000,
  apiUrl: process.env.API_URL || 'http://localhost:3002',
  apiKeyToken: process.env.API_KEY_TOKEN,
  apiPort: process.env.API_PORT || 3002,
};

export default config;
