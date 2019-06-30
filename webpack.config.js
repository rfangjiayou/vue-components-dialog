const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.js',

	output: {
		filename: '[name].[chunkhash].js',
		path: path.resolve(__dirname, 'dist')
    },
    
    devServer: {
        open: false,
        contentBase: "./",//本地服务器所加载的页面所在的目录
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
          '@': path.resolve('src')
        }
    },

	module: {
		rules: [
            {
                test: /\.vue$/,
                use : [
                    {loader: 'vue-loader'}
                ]
            }, 
			{
				test: /.(js|jsx)$/,
				include: [path.resolve(__dirname, 'src')],
				loader: 'babel-loader',

				options: {
					plugins: ['syntax-dynamic-import'],

					presets: [
						[
							'@babel/preset-env',
							{
								modules: false
							}
						]
					]
				}
            },
            {
                test: /\.css$/,
                loader: 'vue-style-loader!css-loader'
            }, {
                test: /\.less$/,
                loader: 'vue-style-loader!css-loader!less-loader'
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                query: {
                    name: '[name].[ext]?[hash]'
                }
            }
		]
    },
    
    devtool: '#eval-source-map',

    plugins: [
        new VueLoaderPlugin(), 
        new HtmlWebpackPlugin({
            template: __dirname + "/index.html"}
        )
    ]
};
