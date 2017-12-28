import * as React from 'react';
import shallowEqual from 'fbjs/lib/shallowEqual';

export interface IProps {
	values: any[];
	maxLength?: number;
	getComponent: (props) => JSX.Element;
}

export default class List extends React.Component<IProps> {
	public defaultProps: Partial<IProps> = {
		maxLength: 1
	}

	shouldComponentUpdate (nextProps: IProps): boolean {
		return !this.arraysAreEqual(nextProps.values, this.props.values);
	}

	private arraysAreEqual(arr1: any[], arr2: any[]): boolean {
		if (arr1.length != arr2.length) {
			return false;
		}

		for (let i = 0; i < arr1.length; i++) {
			if (!shallowEqual(arr1[i], arr2[i])) {
				return false;
			}
		}
		
		return true;
	}

	render() {
		if (this.props.values.length > this.props.maxLength) {
			let innerArrayLength = this.props.maxLength;
			while(this.props.values.length > innerArrayLength*this.props.maxLength) {
				innerArrayLength *= this.props.maxLength;
			}
			const childComponents: JSX.Element[] = [];
			const {children, ...propsNoChildren} = this.props;
			for (let i = 0; i < this.props.values.length; i += innerArrayLength) {
				childComponents.push(
					<List
						key={`optChild${i}`}
						{...propsNoChildren}
						values={this.props.values.slice(i, i + innerArrayLength)}

					/>
				);
			}

			return childComponents;
		} else {
			return this.props.values.map(
				(props, index) =>  this.props.getComponent({...props as any, key: `optChild${index}`})
			);
		}
	}
}