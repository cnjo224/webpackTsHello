const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
              test: /\.tsx?$/,
              loader: 'ts-loader',
              exclude: /node_modules/,
            },
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    devtool: 'source-map',
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress: true,
        port: 4000,
    },
    plugins: [new HTMLWebpackPlugin({
      filename: "index.html",
      template: path.resolve(__dirname, "src/index.html")
    })],
};