'Use strict';
const entry = require('./webpack.entries').createClientEntry(
	'preview', 
	[`webpack-dev-server/client?/`, "webpack/hot/dev-server", 'react-hot-loader/patch', './entries/preview']
);
const webpack = require("webpack");
const params = require('minimist')(process.argv.slice(2));

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

entry.devServer = {hot: true, host: "0.0.0.0"}
entry.plugins.push(new webpack.HotModuleReplacementPlugin());

const testModule = params.file;
if (testModule) {
	console.info("Start testing module: " + testModule);
	entry.plugins.push(new webpack.NormalModuleReplacementPlugin(/\/fakeTestModule\.tsx/, testModule));
} else {
	console.warn("No module was specified for tests.");
}

module.exports = entry;