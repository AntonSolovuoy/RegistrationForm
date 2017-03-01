module.exports = {
  entry: './index.js',
  output: {
    path: '/',
    filename: 'index.bundle.js',
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  watch: true,
  devtool: 'source-map'
};
