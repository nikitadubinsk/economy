module.exports = {
  apps: [
    {
      name: "economy",
      script: "./server/server.js",
      instances: 0,
      exec_mode: "cluster",
      watch: true,
      env: {
        NODE_ENV: "production",
        PORT: "3500",
      },
    },
  ],
};
