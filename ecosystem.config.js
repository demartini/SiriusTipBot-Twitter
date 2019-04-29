const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  apps: [
    {
      name: 'SiriusTipBot-Twitter',
      script: './bot/bot.js',
      cwd: process.env.BOT_DIR,
      output: process.env.BOT_DIR + '/logs/out.log',
      error: process.env.BOT_DIR + '/logs/error.log',
      log: process.env.BOT_DIR + '/logs/combined.outerr.log',
      instances: 1,
      autorestart: true,
      watch: true,
      ignore_watch: ['node_modules', 'logs', '.git'],
      max_memory_restart: '1G',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
}
