module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'npm',
      args: 'run preview',
      env: {
        NODE_ENV: 'production',
        PORT: 3000
      }
    }
  ]
}