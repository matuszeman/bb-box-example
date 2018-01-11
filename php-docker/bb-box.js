module.exports = {
  start: './service.config.js',
  installDependencies: 'composer install',
  chown: {
    paths: ['vendor']
  }
};
