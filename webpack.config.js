const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const IS_DEV = process.env.NODE_ENV === 'development'

module.exports = {
  entry: 'index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: IS_DEV ? 'bundle.js' : '[name].[contenthash].js'
  },
  mode: IS_DEV ? 'development' : 'production',
  module: {
    rules: [
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader'
        ]
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        moment: {
          test: /[\\/]node_modules[\\/](moment)[\\/]/,
          name: 'moment',
          chunks: 'all'
        },
        react: {
          test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
          name: 'react',
          chunks: 'all'
        }
      }
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: 'Caching',
      template: 'src/index.html'
    })
  ],
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.json', '.js', '.jsx'],
    mainFiles: ['index']
  },
  devtool: IS_DEV ? 'inline-source-map' : 'source-map',
  devServer: {
    historyApiFallback: true,
    port: 3000,
    compress: false,
    contentBase: './dist',
    inline: true,
    hot: true,
    open: false,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true
    }
  }
}
