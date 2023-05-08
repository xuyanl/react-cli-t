const devConfig = require('./dev');
const pordConfig = require('./prod');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { merge } = require('webpack-merge');

const devMode = process.env.NODE_ENV !== 'production';

/** @type {import('webpack').Configuration} */
const config = {
	entry: path.resolve(__dirname, '../src/index'),
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: '[id][chunkhash].js',
		assetModuleFilename: 'assets/[hash][ext]',
		clean: true,
	},
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '../src'),
		},
		extensions: ['.tsx', '.ts', '.jsx', '...']
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					'css-loader',
				],
			},
			{
				test: /\.less$/,
				use: [
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
					},
					'less-loader',
				], // 使用loader来编译css文件，loader的执行顺序是从右往左，这里是先 css-loader，然后style-loader
				//使用less或者scss可以安装相应的loader
			},
			{
				test: /\.m?(js|ts|tsx)$/, // 匹配js ts tsx 文件
				exclude: /(node_modules)/, //排除node_modules下的文件
				use: {
					loader: 'babel-loader', // 使用babel编译，可以直接添加 options 选项，也可以在根目录新建babel.config.json文件
				},
			},
			{
				test: /\.(png|jpg|gif)$/i, //资源模块处理，不需要用 file-loader等去处理了，https://webpack.docschina.org/guides/asset-modules/#root
				type: 'asset',
			},
		],
	},
	plugins: [
		// 需要按装html-webpack-plugin包
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, '../index.html'), // src目录下需要有这个文件
		}),
		// 打包分析工具 webpack-bundle-analyzer
		// new BundleAnalyzerPlugin({
		//     generateStatsFile: true,
		//     analyzerPort: 'auto',
		//     openAnalyzer: false
		// })
	],
};
module.exports = merge(config, devMode ? devConfig : pordConfig);
