const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    main: './src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'main.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              '@babel/preset-react',
              '@babel/preset-env'
            ],
            "plugins": [
              "transform-flow-strip-types",
              [
                "babel-plugin-root-import",
                {
                  "rootPathSuffix": "src/",
                  "rootPathPrefix": "~"
                }
              ]
            ]
          }
        }
      },
      {
        test: /\.scss$/,
        use:  [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'main.css'
    }),
    new HtmlWebpackPlugin({
      template: './src/static/index.html'
    })
  ]
};
