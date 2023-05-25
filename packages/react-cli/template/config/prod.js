const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = {
	mode: 'production',
	plugins: [

		new MiniCssExtractPlugin(),
		new CompressionWebpackPlugin()
	],
};
module.exports = config;
