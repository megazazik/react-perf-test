'Use strict';
const path = require("path");
const SplitPlugin = require('webpack-split-by-path');
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || "development";

module.exports = {};
module.exports.createClientEntry = (name = 'bundle', path = './entries/index') => createClientEntry(name, path);
module.exports.createDevClientEntry = ({port = 8080, proxyPort = 8000} = {}) => {
	const entry = createClientEntry(
		'bundle', 
		['react-hot-loader/patch', './entries/dev']
	);
	entry.devServer = {
		host: "0.0.0.0",
		port,
		proxy: {
			"*": `http://localhost:${proxyPort}/`
		}
	};
	entry.module.rules.forEach( (loader) => {
		const usedLoader = typeof loader.use === 'string' ? 
				loader.use :
			Array.isArray(loader.use) ? 
				loader.use[0].loader || loader.use[0] :
				loader.use.loader;
		
		if (usedLoader !== 'ts-loader' && usedLoader !== 'babel-loader') {
			return;
		}
	
		if (Array.isArray(loader.use)) {
			loader.use.unshift('react-hot-loader/webpack');
		} else {
			loader.use = ['react-hot-loader/webpack', loader.use];
		}
	});
	return entry; 
};
module.exports.createServerEntry = () => { return createServerEntry('index', './entries/server/index'); };

function createClientEntry(name, entryPath, noEmitFiles, publicPath) {
	const entry = createCommonEntry(name, entryPath, noEmitFiles, publicPath);
	entry.plugins.push(new SplitPlugin([
		{
			name: 'vendors',
			path: /node_modules/
		},
		{
			name: name + '.eng',
			path: /eng\.json$/
		},
		{
			name: name + '.rus',
			path: /rus\.json$/
		}
	]));
	return entry;
}

function createServerEntry(name, entryPath) {
	var serverEntry = createCommonEntry(name, entryPath, true);
	serverEntry.target = "node";
	serverEntry.node = {
		__dirname: false,
		__filename: false
	}
	serverEntry.output.libraryTarget = "commonjs2";
	serverEntry.output.path = path.resolve(__dirname, '../bld/server');

	serverEntry.externals = [nodeExternals()];

	/** @todo удалить */
	const configPath = path.resolve(__dirname, '../config');
	serverEntry.externals.push((context, request, callback) => {
		const modulePath = path.resolve(context, request);
		if (~modulePath.indexOf(configPath) && request.indexOf('.') === 0) {
			return callback(null, 'commonjs ' + request);
		}
		callback();
	});
	return serverEntry;
}

function createCommonEntry(name, entryPath, noEmitFiles, publicPath) {
	let entry = {};
	entry[name] = entryPath;

	const cssLoaderOptions = {
		modules: true,
		localIdentName: '[path][name]__[local]'
	}

	return {
		context: path.resolve(__dirname, '../src'),
		entry: entry,
		output: {
			filename: '[name].js',
			path: path.resolve(__dirname, '../bld/public'),
			publicPath: (publicPath ? publicPath : "") + "/static/"
		},
		resolve: {
			extensions: [".js", ".jsx", ".ts", ".tsx"],
			modules: [
				path.resolve(__dirname, '../src'),
				"node_modules"
			]
		},
		module: {
			rules: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: [{
						loader: 'babel-loader',
						options: {
							presets: [
								'react', 
								['es2015', {modules: false}]
							]
						}
					}]
				},
				{
					test: /\.tsx?$/,
					use: [
						'ts-loader'
					]
				},
				{
					test: /\.css$/,
					use: noEmitFiles ? [{
						loader: 'css-loader/locals',
						options: cssLoaderOptions
					}] : [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: cssLoaderOptions
						}
					]	
				},
				{
					test: /\.less$/,
					use: noEmitFiles ? [
						{
							loader: 'css-loader/locals',
							options: cssLoaderOptions
						},
						{
							loader: 'less-loader'
						}
					] : [
						{
							loader: 'style-loader'
						},
						{
							loader: 'css-loader',
							options: cssLoaderOptions
						},
						{
							loader: 'less-loader'
						}
					]
				},
				{
					test: /\.(svg|png|jpg)$/,
					use: [{
						loader: 'url-loader',
						options: {
							emitFile: !noEmitFiles,
							limit: 1000,
							name: '[path][name].[ext]'
						}
					}]
				}
			]
		},
		plugins: [
			new webpack.DefinePlugin({NODE_ENV: JSON.stringify(NODE_ENV)}),
			new webpack.NamedModulesPlugin()
		],
		devtool: 'module-source-map'
	};
}