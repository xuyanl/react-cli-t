const path = require('path');

/** @type {import('webpack').Configuration} */
const config = {
	mode: 'development',
	devServer: {
		historyApiFallback: true,
		// static: {
		// 	directory: path.join(__dirname, '../dist'),
		// },
		cache: { type: 'filesystem' },
		open: true,
		port: 'auto',
		proxy: {
		}
	}
};
module.exports = config;
