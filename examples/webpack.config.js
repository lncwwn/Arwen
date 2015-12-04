var webpack = require('webpack')

module.exports = {
    entry: './test.js',
    output: {
        path: './dist',
        filename: 'test.js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel' }
        ]
    },
    babel: {
        //loose: 'all'
    },
    devtool: '#source-map'
}

