/* Have to use ES5 syntax for this */
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
            }
        ]
    }
}