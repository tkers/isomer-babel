import path from "path";
import webpack from "webpack";
import cleanWebpackPlugin from "clean-webpack-plugin";
import copyWebpackPlugin from "copy-webpack-plugin";

export default {

    entry: ["babel-polyfill", "./js/index.js"],

    output: {
        path: "dist",
        filename: "game.js"
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compressor: { warnings: false }
        }),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new cleanWebpackPlugin(["dist"], {
            root: path.resolve(__dirname, "..")
        }),
        new copyWebpackPlugin([
            { from: path.resolve(__dirname, "../static") }
        ])
    ],

    module: {
        preLoaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "../js")
            ],
            loader: "eslint-loader",
        }],
        loaders: [{
            test: /\.js$/,
            include: [
                path.resolve(__dirname, "../js")
            ],
            loader: "babel-loader",
        }]
    },

    eslint: {
        failOnWarning: false,
        failOnError: false,
        emitWarning: true
    },

    resolve: {
        root: [ path.resolve(__dirname, "../js") ],
        extensions: [".js", ""]
    },

    stats: {
        colors: true,
        chunks: false
    }
};
