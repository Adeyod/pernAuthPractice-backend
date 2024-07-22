const { config } = require('dotenv');

config();

module.exports = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  SERVER_URL: process.env.SERVER_URL,
  CLIENT_URL: process.env.CLIENT_URL,
};
