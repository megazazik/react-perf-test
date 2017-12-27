import * as ReactDom from 'react-dom';
import * as React from 'react';
import PageView from 'components/main';

ReactDom.render(
	React.createElement(PageView, {}),
	document.getElementById('content')
);