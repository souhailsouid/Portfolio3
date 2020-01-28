var path = require('path')
module.exports = {

  module: {
    rules: [{
      test: /\.m?jsx?$/i,
      exclude: /(node_modules|bower_components)/,
      use: ['babel-loader']
    },

    {
      test: /\.s[ac]ss$/i,
      use: [{
        loader: 'file-loader',
        options: { name: '[name].css' }
      }, 'postcss-loader', 'sass-loader']
    }, {
      test: /\.html?$/i,
      use: [{
        loader: 'file-loader',
        options: { name: '[name].html' }
      }]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000
  }
}
