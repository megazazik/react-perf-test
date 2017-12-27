import * as ReactDom from 'react-dom';
import * as React from 'react';
import PageView from 'components/main';
import { AppContainer } from 'react-hot-loader';

const render = (Component) => {
	ReactDom.render(
		<AppContainer>
			<Component />
		</AppContainer>,
		document.getElementById('content'),
	)
}

render(PageView)

declare const module;
// Webpack Hot Module Replacement API
if (module.hot) {
	module.hot.accept('components/main', () => { render(PageView) })
}