
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BUILD_DIR = path.resolve(__dirname, 'src');
var APP_DIR = path.resolve(__dirname, 'dist');
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: BUILD_DIR + '/index.tsx',
    output: {
        path: APP_DIR,
        filename: "app.bundle.js"
    },

    plugins: [new HtmlWebpackPlugin({
        // minify: {
        //     collapseWhitespace: true
        // },
        hash: true,
        title: 'Post Office 365',
        template: 'src/index.ejs'

    }), new CheckerPlugin(),
    new ExtractTextPlugin({
        filename: "app.css",
        disable: false,
        allChunks: true
    })
    ],

    // Enable sourcemaps for debugging webpack's output.
    devtool: "inline-source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", "jsx"]
    },

    module: {
        rules: [
            // { test: /\.ts(x?)$/, include: BUILD_DIR, use: 'awesome-typescript-loader' },
            { test: /\.tsx?$/, include: BUILD_DIR, use: 'ts-loader' },
            {
                test: /\.scss$/, use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader",
                    publicPath: "/dist"
                })
            }

                //ExtractTextPlugin.extract(['style-loader', 'css-loader', 'sass-loader']) },
            // { test: /\.(png|jpg|jpeg|gif|svg)$/, use: 'url-loader?limit=25000' }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },

};