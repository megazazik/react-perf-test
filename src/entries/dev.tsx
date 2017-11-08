import * as ReactDom from 'react-dom';
import * as React from 'react';
import PageView from 'components/main';
import {setLanguage, Language} from 'modules/lang';
import { AppContainer } from 'react-hot-loader';

setLanguage(window['__language__'] as Language);

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