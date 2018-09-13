const {
  VueLoaderPlugin
} = require('vue-loader');

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.css'],
  },
  module: {
    rules: [{
        test: /\.vue$/,
        use: [{
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },

      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },

      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },

      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },

      {
        test: /\.styl(us)?$/,
        use: [
          'style-loader',
          'css-loader',
          'stylus-loader'
        ]
      },
      {
        test: /\.md$/,
        use: [
          'vue-loader',
          'vue-md-loader'
        ]
      },
      {
        test: /\.(ttf|svg)$/,
        loader: 'url-loader'
      }
    ]
  },

  performance: {
    hints: false
  },

  plugins: [
    new VueLoaderPlugin()
  ]
};
