import * as React from 'react';
import { renderToString } from 'react-dom/server';
import PageView from 'components/main';

export default (): string => {
	const html = renderToString(React.createElement(PageView, {}));
	
	return `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<title>Производительность React</title>
	</head>
	<body>
		<div id="content">${html}</div>
		<script src="/static/manifest.js"></script>
		<script src="/static/vendors.js"></script>
		<script src="/static/bundle.js"></script>
	</body>
</html>`;
};