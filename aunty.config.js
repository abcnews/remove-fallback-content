const path = require('path');
module.exports = {
  type: 'basic',
  webpack: config => {
    config.module.rules
      .find(r => r.loader.match(/babel-loader/))
      .include.push(path.resolve(__dirname, 'node_modules/odyssey'));
    return config;
  }
};
