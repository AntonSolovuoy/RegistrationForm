module.exports = {
  entry: './main.js',
  output: {
    path: '/',
    filename: 'main.bundle.js',
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