const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return Merge(CommonConfig(env), {
        plugins: [
            new UglifyJSPlugin({
                compress: {
                    drop_console: true
                }
            }),
            new webpack.DefinePlugin({
                API_TARGET: JSON.stringify(
                    'https://insert-your-online-api-here.net/'
                ),
                'process.env': {
                    NODE_ENV: '"production"'
                }
            })
        ]
    });
};
