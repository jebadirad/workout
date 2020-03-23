const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    open: true
  },
  devtool: 'inline-source-map',
  watch: true
});
