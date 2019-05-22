const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const pkg = require('./package.json');
const SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');

module.exports = env => ({
    mode: 'development',
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        path.join(__dirname, 'src', 'index.js')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
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
                include: [path.resolve(__dirname, 'src')],
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
            favicon: 'public/icon_192.png',
            title: 'Sware'
        }),
        new WebpackPwaManifest({
            name: 'Sware',
            short_name: 'Sware',
            description: 'Move the blocks to their target',
            background_color: '#ffffff',
            theme_color: '#ffffff',
            start_url: '/',
            scope: '/',
            crossorigin: 'use-credentials', //can be null, use-credentials or anonymous
            icons: [
                {
                    src: path.resolve('src/assets/icon_512.png'),
                    sizes: [96, 128, 192, 256, 384, 512] // multiple sizes
                }
            ]
        }),
        new SWPrecacheWebpackPlugin({
            cacheId: `${pkg.name}-${pkg.version}`,
            staticFileGlobs: [path.join(path.join(__dirname, 'dist'), '**/*')],
            logger: function() {},
            filename: 'sw.js',
            minify: false
        }),
        new ExtractTextPlugin('style.css')
    ]
});
