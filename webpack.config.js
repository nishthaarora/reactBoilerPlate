var path = require('path');
const config = {
    entry:'./components/app.jsx',
    output: {
        filename: './public/bundle.js',
    }, 
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'components'),
                exclude: path.resolve(__dirname,'node_modules'),
                options: {presets: ["babel-preset-es2015", "babel-preset-react"]}
            }
        ]
    }
        // devtool: "source-map"
};

module.exports = config;