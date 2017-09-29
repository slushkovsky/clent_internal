var webpack = require('webpack');
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve('dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{ 
				test: /\.js$/,                                   
				loader: 'babel-loader', 
				exclude: /node_modules/,
				query: {
					presets: ['es2015']
				} 
			}, 
            { 
            	test: /\.(jpe?g|gif|png|svg|woff|ttf|wav|mp3)$/, 
            	loader: 'file-loader' 
            },
            { 
            	test: /\.css$/,                                  
            	loader: 'style-loader!css-loader'
           	},
           	{
           		test: /\.html$/,
           		loader: 'string-loader'
           	}
		]
	},
	resolve: {
		alias: {
			img: path.resolve('src/img'),
			css: path.resolve('src/css'),
			views: path.resolve('src/views')
		}
  	},
  	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filename: 'index.html', 
			inject: 'body'
		})
	]
};
