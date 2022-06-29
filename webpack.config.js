/* Have to use ES5 syntax for this */
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
    /* Rules = way to tell webpack what it needs to do when it encounters certain file types: */
        rules: [
            {
            /* find any files with js or jsx */
                test: /\.(js|jsx)$/,
            /* exclude = files to exclude: */
                exclude: /node_modules/,
            /* use tells webpack what loader to run, a helper that converts code into a working version (transpile): */
                use: {
                    /* We use Babel, a library that transpile JS and JSX into older versions of JS: */
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/,
            /* Loaders evaluate from right to left: */
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
        /* Takes in a config file that is the template of the file used as an HTML starting point: */
            template: './index.html'
        })
    ]
}