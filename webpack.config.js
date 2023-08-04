var path = require('path');
const isProd = (process.env.NODE_ENV === 'production');

module.exports = {
    devtool: isProd ? false : 'eval-cheap-module-source-map',
    entry: './src/main/js/app.js',
    cache: true,
    mode: 'development',
    output: {
        path: __dirname,
        filename: './src/main/resources/static/built/bundle.js'
    },
    module: {
        rules: [
            {
                test: path.join(__dirname, '.'),
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }]
            }
        ]
    }
};