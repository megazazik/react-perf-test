const express = require('express');
const path = require('path');

const app = express();
	
app.use('/', express.static(path.resolve(__dirname, '../../')));

app.use(function(req, res) {
	res.status(404).send('Page not found!');
	console.log('Url not found: ' + req.url);
});

app.use(function(err, req, res, next) {
	console.log(err.stack);
	res.status(500).send('Something broke!');
});

app.listen(80, () => {
	console.log(`The application started on port ${80}.`);
});