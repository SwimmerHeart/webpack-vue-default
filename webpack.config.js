const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {VueLoaderPlugin} = require("vue-loader");

module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash:6].js',
        clean: true
    },
    devServer: {
        open: true,
        port: 8080,
        static: './dist',
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
        extensions: ['.js', '.vue', '.json']
    },
    module: {
        rules: [
            {
                test: /\.(?:js|mjs|cjs)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', { targets: "defaults" }]
                        ]
                    }
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        scss: ['vue-style-loader','css-loader','sass-loader']}
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    "sass-loader",
                ],
            },
            {
                test: /\.(eot|ttf|woff|woff2)(\?\S*)?$/,
                loader: "file-loader",
                options: {
                    name: "[name][contenthash:4].[ext]",
                },
            },
            {
                test: /\.(png|jpe?g|gif|webm|mp4|svg)$/,
                loader: "file-loader",
                options: {
                    outputPath: "assets",
                    name: "[name].[ext]",
                    esModule: false,
                },
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: path.resolve(__dirname, "public", "index.html"),
            favicon: "./public/favicon.ico",
        }),
        new VueLoaderPlugin()
    ],
}