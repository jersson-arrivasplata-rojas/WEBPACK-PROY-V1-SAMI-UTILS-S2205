const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const sourceMap = true;
const config = {
    entry: "./src/index.ts",
    module: {
        rules: rules()
    },
    resolve: {
        extensions: [
            '.jsx',
            '.ts',
            '.json',
            '.css',
            '.tsx',
            '.js'
        ]
    },
    plugins: plugins(),
    entry: entry(),
    devServer: {
        contentBase: './dist',
        compress: true,
        port: 9000
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    output: {
        library: 'SamiUtils',
        libraryTarget: 'var',
        globalObject: 'this',
        pathinfo: true,

       // devtoolLineToLine: true,
        //filename: "index.js",
        //path: path.resolve(__dirname, 'dist')
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        //sourceMapFilename: '[name].[hash:8].map',
        chunkFilename: '[id].js',

        libraryTarget: 'umd'
    },
    devtool: 'source-map'
}

module.exports = config;

function plugins() {
    return [
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
    ];
}
function entry() {
    return {
        app: [
            //'@babel/polyfill',
            './src/index.ts'
        ],
        'html2canvas': [
            "html2canvas/dist/html2canvas.js"
        ],
        'sweetalert2': [
            "sweetalert2/dist/sweetalert2.js"/*,
            "sweetalert2/dist/sweetalert2.css"*/
        ],
        /*'highlight.js': [
            "highlight.js/lib/index.js"
        ],*/
        '@highlightjs': [
            "@highlightjs/cdn-assets/highlight.js",
            "@highlightjs/cdn-assets/styles/default.min.css"
        ]
    };
}

function rules() {
    return [
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
    ];
}