module.exports = {
  entry: {
    index: './src/javascripts/index'
  },
  output: {
    filename: '[name].js',
    path: './public/javascripts'
  },
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint'
      }
    ],
    loaders:[
    {
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
