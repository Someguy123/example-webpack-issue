var webpack = require('webpack');
var path = require('path');

module.exports = {
    debug: false,
    context: path.join(path.resolve(__dirname), '/lib'),
    entry: [
        './main.jsx',
    ],

    //externals: [
    //    'Bitcoin'
    //],
    output: {
        path: path.join(path.resolve(__dirname), 'js/'),
        filename: "production.js",
    },

    module: {
        loaders: [
            { test: /\.jsx?$/, loaders: ['react-hot', 'jsx?harmony'], include: path.join(path.resolve(__dirname), '/resources/assets')},
            { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['jsx-loader?insertPragma=React.DOM&harmony']},
            { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.json$/, loader: "json-loader"}
        ],
        //noParse: [
        //    path.join(path.resolve(__dirname), '/resources/assets/js/bitcoinjs.min.js')
        //]
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        //alias: {'bitcoinjs-lib': path.join(path.resolve(__dirname), '/resources/assets/js/bitcoinjs.min.js')}
    },

    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};
