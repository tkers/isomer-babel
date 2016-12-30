import path from "path";
import webpack from "webpack";
import copyWebpackPlugin from "copy-webpack-plugin";

export default {

    entry: ["babel-polyfill", "./js/index.js"],

    output: {
        path: "/",
        publicPath: "/",
        filename: "game.js"
    },

    devtool: "#source-map",

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
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

    historyApiFallback: {
        index: "index.html"
    },

    contentBase: path.resolve(`${__dirname}/../static`),

    resolve: {
        root: [ path.resolve(__dirname, "../js") ],
        extensions: [".js", ""]
    },

    stats: {
        colors: true,
        chunks: false
    }
};
