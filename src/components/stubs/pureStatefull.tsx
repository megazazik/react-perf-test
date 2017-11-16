import * as React from 'react';
import { ITestProps } from '../interface';
import getMarkup from '../markup/small';

export default class PureStateFull extends React.PureComponent<ITestProps> {
	render() {
		return getMarkup(this.props);
	}
}