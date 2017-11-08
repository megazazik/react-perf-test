import * as React from 'react';
import { renderToString } from 'react-dom/server';
import PageView from 'components/main';
import {setLanguage} from 'modules/lang';

export default (): string => {
	const currentLanguage = 'rus';
	setLanguage(currentLanguage);

	const html = renderToString(React.createElement(PageView, {}));
	
	return `
<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Typescript application template</title>
	</head>
	<body>
		<div id="content">${html}</div>
		<script>
			window.__language__ = "${currentLanguage}";
		</script>
		<script src="/static/manifest.js"></script>
		<script src="/static/vendors.js"></script>
		<script src="/static/bundle.${currentLanguage}.js"></script>
		<script src="/static/bundle.js"></script>
	</body>
</html>`;
};