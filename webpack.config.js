const webpack = require('webpack');
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, './server_build');

module.exports = {
    entry:'./server.js',
    output: {
        filename: "bundle.[hash].js",
        path:BUILD_DIR
    },
    target:'node',
    module: {
        rules: [
            {
                test: /.css$/,
                use: [{
                    loader: 'style-loader'
                },
                {
                    loader: 'css-loader'
                }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
    ]
}