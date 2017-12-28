import express from 'express';
import getHtml from './getMarkUp';
import * as path from 'path';

export interface IParams {
	port?: number;
}

export default function startServer({port = 8080}: IParams = {}) {
	const app = express();
	
	/** @todo разобраться с относительными путями */
	app.use('/bld/public', express.static(path.resolve(__dirname, '../public/')));

	app.get('/', (req, res) => {
		res.setHeader("Content-Type", "text/html; charset=utf-8");
		res.send(getHtml());
	});

	app.use(function(req, res) {
		res.status(404).send('Page not found!');
		console.log('Url not found: ' + req.url);
	});

	app.use(function(err, req, res, next) {
		console.log(err.stack);
		res.status(500).send('Something broke!');
	});

	app.listen(port, () => {
		console.log(`The application started on port ${port}.`);
	});
}