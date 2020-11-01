"use strict";
var path = require('path'); // для работы с path

module.exports = [
    {
        mode: 'development',
        entry: {
            'jswl': './src/jswl-new.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name]-min.js',
            library: 'jswl',
            libraryExport: 'default',
            libraryTarget: 'umd'
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000 // порверяем изменения раз в секунду
        },
    },
    {  // без минификации
        mode: 'production',
        entry: {
            'jswl': './src/jswl-new.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
            library: 'jswl',
            libraryExport: 'default',
            libraryTarget: 'umd'
        },
        module: {
            rules: [
                {
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                }
            ]
        },
        watchOptions: {
            aggregateTimeout: 500,
            poll: 1000 // порверяем изменения раз в секунду
        },
        optimization: {
            minimize: false
        }
    },
];
