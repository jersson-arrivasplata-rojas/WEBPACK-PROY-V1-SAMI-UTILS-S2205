const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//const HighlightPlugin = require('highlight-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const sourceMap = true;
const config = {
    entry: "./src/index.ts",
    output: {
        //filename: "index.js",
        //path: path.resolve(__dirname, 'dist')
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        //sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].js'
    },
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.css$/i,
                use: [
                    //'style-loader',
                    //'css-loader'
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: sourceMap
                        }// translates CSS into CommonJS
                    }
                ],
            },
            {
                test: /\.ts$/,
                //use: 'ts-loader',
                exclude: /node_modules/,
                loader: 'ts-loader'
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: "style-loader" // creates style nodes from JS strings
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: sourceMap
                        }// translates CSS into CommonJS
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: sourceMap
                        } // compiles Sass to CSS
                    }
                ]
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name: 'images/[hash]-[name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.json',
            '.css',
            '.tsx'
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html"
        }),
        new webpack.ContextReplacementPlugin(
            /highlight\.js\/lib\/languages$/,
            new RegExp(`^./(${['javascript', 'python', 'bash'].join('|')})$`),
        ),
        //new HighlightPlugin()
        new CleanWebpackPlugin(),
        new UglifyJsPlugin({
            sourceMap: sourceMap
        }),
        new ForkTsCheckerWebpackPlugin()
    ],
    entry: {
        'html2canvas': [
            "html2canvas/dist/html2canvas.js"
        ],
        'sweetalert2': [
            "sweetalert2/dist/sweetalert2.js",
            "sweetalert2/dist/sweetalert2.css"
        ],
        /*'highlight.js': [
            "highlight.js/lib/index.js"
        ],*/
        '@highlightjs': [
            "@highlightjs/cdn-assets/highlight.js"
        ]
    },
    devtool: 'source-map'
}

module.exports = config;
//        // contentBase: path.join(__dirname, 'dist'),

/**  

 * output: {
        path: './build/',
        filename: '[name].js',
    },
 * 
   
 */