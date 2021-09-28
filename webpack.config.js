const path = require('path')
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')

const resolve = relativePath => path.resolve(__dirname, '..', relativePath)

module.exports = {
  mode: 'development',
  entry: {
    vue: 'vue',
    index: resolve('src/main.js')
  },
  output: {
    filename: 'bundle.min.js',
    path: resolve('dist')
  },
  module: {
    rules: [
      {
        test: /.(ttf|woff2|woff|eot|jpg|jpeg|png|svg)$/,
        use: ['file-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['vue-style-loader', {
              loader: 'css-loader'
            }],
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
            js: [
              'babel-loader'
            ]
          },
          cacheBusting: true
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [
          resolve('src'),
          resolve('node_modules/webpack-dev-server/client')
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [{
          loader: 'style-loader', // creates style nodes from JS strings
          options: {
            insert: 'head', // insert style tag inside of <head>
            injectType: 'singletonStyleTag' // this is for wrap all your style in just one style tag
          }
        }, {
          loader: 'css-loader' // translates CSS into CommonJS
        }]
      }
    ]
  },
  devtool: 'eval',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jquery: 'jquery',
      'window.jQuery': 'jquery',
      jQuery: 'jquery'
    })
  ],
  resolve: {
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.vue', '.js', '.json']
  },
  performance: {
    hints: false
  }
}
