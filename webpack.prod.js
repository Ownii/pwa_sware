const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = function(env) {
    return Merge(CommonConfig(env), {
        plugins: [
            new UglifyJSPlugin({
                compress: {
                    drop_console: false
                }
            }),
            new webpack.DefinePlugin({
                API_TARGET: JSON.stringify(''),
                'process.env': {
                    NODE_ENV: '"production"',
                    PUBLIC_URL: '"https://sware.ownii.com/"'
                }
            })
        ]
    });
};
