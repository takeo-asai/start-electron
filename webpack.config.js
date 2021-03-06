const path = require('path');

module.exports = {
    context: path.resolve(__dirname, './src'),
    entry: {
        app: './app.js',
        components: './components/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js'
    },
    target: 'electron-renderer',
    node: {
        __dirname: false
    },
    resolve: { extensions: ['.js', '.jsx'] },
    module: {
        loaders: [
            {
                test: /\.html$/,
                loader: 'file-loader?name=[name].[ext]'
            },
            { test: /\.jsx?$/, exclude: /node_ modules/, loader: 'babel-loader' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'], include: path.resolve(__dirname, './src') }
        ]
    }
};
