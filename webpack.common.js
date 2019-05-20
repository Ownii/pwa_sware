
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = env => ({
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, 'src', 'index.js'),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                enforce: 'pre',
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'eslint-loader',
                        options: {
                            emitWarning: true,
                            fix: true
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, "src"),
                ],
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { importLoaders: 1 } },
                        'postcss-loader'
                    ]
                })
            },
            {
                test: /\.(svg|eot|ttf|woff|woff2|png|jpe?g)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                            fallback: 'file-loader'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'public/index.html',
            favicon: 'public/icon_192.ico',
            title: 'Sware',
            manifest: 'public/manifest.json'
        }),
        new ExtractTextPlugin('style.css')
    ]
});
