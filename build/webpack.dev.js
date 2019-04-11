
const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    //  入口
    entry: {
        'bundle': './src/app.js',
        'vendors': ['angular', 'angular-ui-router'],
    },
    //  输出
    output: {
        filename: '[name].js',
        publicPath: '/disk/',
        path: path.join(__dirname, '../disk')
    },
    //  加载器
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude:/node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'stage-2'],
                        plugins: ['transform-runtime']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                    }
                }]
            },
            {

                test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                loader: 'file-loader'
            },
            {  test: /\.(html)$/,
                use: {
                  loader: 'html-loader',
                  options: {
                    attrs: [':data-src']
                  }
                }
              },
        ]
    },

    resolve: {
        extensions: ['.js', '.json', '.less'],
    },

    plugins: [
        new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        moment: 'moment'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['bundle', 'vendors'],
            minChunks: Infinity
        }),
        new ExtractTextPlugin('style.css'),
        new webpack.HotModuleReplacementPlugin(),
    ],

    //devtool: '#source-map'
};
