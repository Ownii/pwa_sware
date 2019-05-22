const webpack = require('webpack');
const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.js');

module.exports = function(env) {
    return Merge(CommonConfig(env), {
        devtool: 'inline-source-map',
        devServer: {
            historyApiFallback: true,
            host: '0.0.0.0',
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
