const path = require("path")
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  entry: {
      home: [
          "./src/index.js",
          "./styles.css"
      ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          },
          { loader: "css-loader", options: { importLoaders: 1 } },
          "postcss-loader",
        ],
      },
      {
        test: /\.(jpg|png|gif)$/,
          use: {
              loader: 'url-loader',
              options: {
                  fallback: 'file-loader',
                  name: '[name].[ext]'
              }
          }
      },
      {
        test: /\.(ttf|eot|svg|gif|png|jpg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        include: path.resolve(__dirname),
        use: [{
            loader: 'file-loader'
        }]
      },
    ],
  },

  // Optional for webpack-dev-server
  devServer: {
    watchContentBase: true,
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
  },
}