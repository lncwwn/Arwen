var webpack = require('webpack')

module.exports = {
    entry: './src/arwen.js',
    output: {
        path: './dist',
        filename: 'arwen.js',
        library: 'Arwen',
        libraryTarget: 'umd'
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

