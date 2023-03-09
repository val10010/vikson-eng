const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminWebpWebpackPlugin = require('imagemin-webp-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');


module.exports = {
        devServer: {
            port: 3000,
            historyApiFallback: true
        },
        mode: 'development',
        entry: "./src/index.js",
        output: {
            path: path.join(__dirname, "/build"),
            filename: "script.min.js?[hash]",
        },
        resolve: {
            alias: {
                Components: path.resolve(__dirname, 'src/components'),
            },
            extensions: [".js"]
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.scss$/,
                    use: [
                        {
                            loader: MiniCssExtractPlugin.loader,
                        },
                        "css-loader", "sass-loader"
                    ]
                },
                {
                    test: /\.svg$/i,
                    use: 'raw-loader'
                },
                {
                    test: /\.(png|jpe?g|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                name: 'images/[name].[ext]'
                            }
                        }
                    ]
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/index.html"
            }),
            new MiniCssExtractPlugin({
                filename: 'style.min.css?[contenthash]',
            }),
            new CopyPlugin({
                patterns: [
                    "robots.txt",
                    { from: 'src/images', to: 'images' }
                ],
            }),
            new ImageminWebpWebpackPlugin({
                config: [
                    {
                        test: /\.(jpe?g|png)/,
                        options: {
                            quality: 90,
                        },
                    },
                ],
                overrideExtension: true,
                detailedLogs: false,
                silent: false,
                strict: true,
            }),
        ]
};
