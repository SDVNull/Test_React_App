const path = require('path');
const { Compiler } = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: "development",
	infrastructureLogging: {
    level: 'warn'
  },
  stats: 'errors-warnings',
	entry: "./src/index.js",
	output: {
		path: path.join(__dirname, "/dist"),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: [
							['@babel/preset-env', { targets: "defaults" }],
							'@babel/preset-react'
						],
						sourceType: 'unambiguous'
					}
				}
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		plugins: [
			new HtmlWebpackPlugin({
				template: "./src/index.html",
			})
		]
	},
};
