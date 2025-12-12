module.exports = {
  apps: [
    {
      name: 'webapp',
      script: 'npm',
      args: 'run dev -- --host 0.0.0.0 --port 3000',
      watch: false,
    },
  ],
};
