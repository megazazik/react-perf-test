import * as React from 'react';
import { ITestProps } from '../interface';
import getMarkup from '../markup/small';

export default class StateFull extends React.Component<ITestProps> {
	render() {
		return getMarkup(this.props);
	}
}