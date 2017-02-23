
const webpack = require('webpack');
const path=require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    output: {
        path: path.resolve(__dirname , "dist"),
        filename: "app.bundle.js"
    },

    plugins: [new HtmlWebpackPlugin({
        // minify: {
        //     collapseWhitespace: true
        // },
        hash: true,
        title: 'Post Office 365',
        template: './src/index.ejs'
        
    })],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js"]
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                loader:['ts-loader', 'source-map-loader'],
                exclude: /node_modules/
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },

};