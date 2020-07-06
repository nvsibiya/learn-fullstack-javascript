const path = require('path');

module.exports = {
    entry: './src/index.js', //start at this point
    output: {
        path: path.resolve('public'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/, //create a babel-loader for every file that ends with .js
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
};