import * as ReactDom from 'react-dom';
import * as React from 'react';
import PageView from 'components/main';
import {setLanguage, Language} from 'modules/lang';

setLanguage(window['__language__'] as Language);

ReactDom.render(
	React.createElement(PageView, {}),
	document.getElementById('content')
);