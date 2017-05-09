var path = require('path');
const config = {
    entry:'./components/app.jsx',
    output: {
        filename: './public/bundle.js',
    }, 
    module: {
        loaders: [
            {
                test: '/\.jsx?$/',
                loader: 'babel-loader',
                exclude: [path.resolve(__dirname, './node_modules')],
                include: [path.resolve(__dirname, './components/app.jsx')],
                options: {presets: ["babel-preset-es2015", "babel-preset-react"]}
            }
        ]
    },
        // devtool: "source-map"
};

module.exports = config;