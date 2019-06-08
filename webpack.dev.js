const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = function(env) {
    return Merge(CommonConfig(env), {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            host: 'localhost',
            disableHostCheck: true
        },
        plugins: [
            new webpack.DefinePlugin({
                API_TARGET: JSON.stringify(''),
                'process.env': {
                    NODE_ENV: '"development"',
                    PUBLIC_URL: '"https://sware-dev.ownii.com/"'
                }
            })
        ]
    });
};
