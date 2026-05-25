const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.ts', 
  
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  
  resolve: {
    extensions: ['.ts', '.js'], 
  },
  
  devServer: {
    port: 3000,
    open: true,
    hot: true,
  },
  
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};