module.exports = {
  apps: [
    {
      name: "Guest server",
      script: "./src/main.js",
      // https://pm2.keymetrics.io/docs/usage/environment
      env: {
        PORT: process.env.PORT ?? 4001,
        NODE_ENV: process.env.NODE_ENV ?? 'dvelopement',
        LOG_LEVEL: "debug"
      },
      env_production: {
        PORT: 4500,
        NODE_ENV: "production",
        // https://www.npmjs.com/package/pino (Sugestia żeby to działało. TODO)
        LOG_LEVEL: "info"
      },
    },
  ],
};
