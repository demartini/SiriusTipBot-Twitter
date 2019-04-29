const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  bot: {
    handle: process.env.TWITTER_HANDLE,
    requiredConfirms: process.env.TWITTER_REQUIREDCONFIRMS
  },
  twitter: {
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token: process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  },
  siriusd: {
    host: process.env.RPC_HOST,
    port: process.env.RPC_PORT,
    username: process.env.RPC_USER,
    password: process.env.RPC_PASS
  }
}
