const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const argv = require('minimist')(process.argv.slice(2));
const path = require('path');
const chalk = require('chalk');

try {
	const config = require(path.resolve(argv.config));
	config.output.publicPath = '/static/';
	new WebpackDevServer(
		webpack(config),
		{
			hot: true,
			contentBase: path.resolve(__dirname, '.'),
			publicPath: `/static/`,
			headers: {
				"Access-Control-Allow-Origin": "*",
				"Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
				"Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
			}
		}
	).listen(argv.port || 8080, argv.host || "0.0.0.0");
} catch (e) {
	console.log(chalk.red(`[${e.name}]: ${e.message}`));

	if (typeof e.stack !== 'undefined') {
		console.log(chalk.red(e.stack));
	}

	process.exitCode = 1;
}