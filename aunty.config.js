const path = require('path');
module.exports = {
  type: 'basic-app',
  deploy: {
    contentftp: {
      from: 'build',
      to: '/www/res/sites/news-projects/no-odyssey-remove'
    }
  },
  babel: {
    cacheDirectory: false
  },
  webpack: config => {
    config.module.rules
      .find(r => r.loader.match(/babel-loader/))
      .include.push(path.resolve(__dirname, 'node_modules/odyssey'));
    return config;
  }
};
