const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: __dirname,
        filename: './release/bundle.js' // release 会自动创建
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html' // bundle.js 会自动注入
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, './release'), // 根目录
        open: true, // 自动打开浏览器
        port: 9000, // 端口
        proxy: {
            '/api/*': {
                target: 'http://localhost:8880'
            }
        }
    },
    resolve: {
        // 先尝试 ts 后缀的 TypeScript 源码文件
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader'
            },
            {
                test: /\.ts$/,
                exclude: /(node_modules)/,
                loader: 'awesome-typescript-loader'
            }
        ]
    },
    devtool: 'source-map',// 输出 Source Map 方便在浏览器里调试 TypeScript 代码
};
