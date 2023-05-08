const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const config = {
	mode: 'production',
	plugins: [

		new MiniCssExtractPlugin()

	],
};
module.exports = config;
