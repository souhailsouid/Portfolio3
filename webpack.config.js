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
    },
    {
      test: /\.(png|jpe?g|gif)$/i,
      use: [
        {
          loader: 'file-loader'
        }
      ]

    },
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'babel-loader'
        },
        {
          loader: 'react-svg-loader',
          options: {
            jsx: true // true outputs JSX tags
          }
        }
      ]
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 3000,
    historyApiFallback: true
  }
}
