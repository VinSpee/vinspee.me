import path from 'path'
import webpack from 'webpack'
import ExtractTextPlugin from 'extract-text-webpack-plugin'

import pkg from '../package.json'
import config from './config.js'

export default {
	module: {
		loaders: [
			{
				test: /\.svg$/,
				loader: 'raw-loader',
			},
			{ // statinamic requirement
				test: /\.md$/,
				loader: 'statinamic/lib/md-collection-loader' +
					`?${ JSON.stringify({
						context: path.join(config.cwd, config.source),
						basepath: config.baseUrl.path,
						feedsOptions: {
							title: pkg.name,
							site_url: pkg.homepage,
						},
						feeds: {
							'feed.xml': {
								collectionOptions: {
									filter: { layout: 'Post' },
									sort: 'date',
									reverse: true,
									limit: 20,
								},
							},
						},
					}) }`,
			},
			{
				test: /\.css$/,
				loader: ExtractTextPlugin.extract(
					'style-loader',
				// loader:
				//	 'style-loader' +
				//	 '!' +
					'css-loader' +
					'!' +
					'postcss-loader',
				),
			},
			{
				test: /\.(html|ico|jpe?g|png|gif)$/,
				/* eslint-disable */
				loader: 'file-loader' +
					'?name=[path][name].[ext]&context=' +
					path.join(config.cwd, config.destination),
				/* eslint-enable */
			},

			// client side specific loaders are located in webpack.config.client.js
		],
	},

	postcss: (wp) => [
		require('stylelint')(),
		require('postcss-modular-scale'),
		require('postcss-import')({
			addDependencyTo: wp,
		}),
		require('postcss-cssnext')({ browsers: 'last 2 versions' }),
		require('cq-prolyfill/postcss-plugin')(),
		require('postcss-browser-reporter')(),
		require('postcss-reporter')(),
	],

	markdownIt: (
		require('markdown-it')({
			html: true,
			xhtmlOut: true,
			linkify: true,
			typographer: true,
			highlight: (code, lang) => {
				const hljs = require('highlight.js')
				// language is recognized by highlight.js
				if (lang && hljs.getLanguage(lang)) {
					return hljs.highlight(lang, code.trim()).value
				}
				// ...or fallback to auto
				return hljs.highlightAuto(code.trim()).value
			},
		})
			.use(require('markdown-it-toc-and-anchor'), { tocFirstLevel: 2 })
	),

	plugins: [
		new ExtractTextPlugin('[name].[hash].css', { disable: config.dev }),
		new webpack.DefinePlugin({ 'process.env': {
			NODE_ENV: JSON.stringify(
				config.production ? 'production' : process.env.NODE_ENV
			),
			CLIENT: true,
			REDUX_DEVTOOLS: Boolean(process.env.REDUX_DEVTOOLS),
		} }),

		...config.production && [
			new webpack.optimize.DedupePlugin(),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false,
				},
			}),
		],
	],

	// ↓ HANDLE WITH CARE ↓ \\

	output: {
		libraryTarget: 'commonjs2', // for node usage, undone in client config
		path: path.join(config.cwd, config.destination),
		publicPath: config.baseUrl.path,
	},
	resolve: {
		extensions: ['.js', '.json', ''],
		root: [
			path.join(config.cwd, 'node_modules'),
		],
	},
	resolveLoader: { root: [path.join(config.cwd, 'node_modules')] },
}