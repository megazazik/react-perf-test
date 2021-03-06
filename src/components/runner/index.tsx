import * as React from 'react';
import styles from './styles.less';
import { ITestProps } from '../interface';
import List from '../list';

export interface IProps {
	getElement(props: ITestProps): JSX.Element;
	optimized?: boolean;
	count: number;
	maxLength: number;
	useSplitting?: boolean;
	onRender(time: number): void;
}

interface IState {
	selectedValue: number;
	values: number[];
}

export default class TestsRunner extends React.PureComponent<IProps, IState> {
	public state: IState = this._createState(this.props.count);

	private _createState(count: number) {
		return {
			processing: false,
			values: Array.apply(null, Array(count)).map((_, i) => i),
			selectedValue: -1
		}
	}

	private _onSelectCallbacks = [];
	private _createOnSelect(value: number) {
		return () => this.setState({selectedValue: value})
	}
	private _getOnSelect(value: number) {
		const newCallback = this._createOnSelect(value);
		if (this._onSelectCallbacks[value] === undefined) {
			this._onSelectCallbacks[value] = newCallback;
		}
		return this._onSelectCallbacks[value];
	}

	private _getProps = (value: number): ITestProps => {
		return {
			value,
			selected: this.state.selectedValue === value,
			onSelect: this.props.optimized ? this._getOnSelect(value) : this._createOnSelect(value)
		}
	}

	public componentWillReceiveProps(nextProps: IProps) {
		if (this.props.count !== nextProps.count) {
			this.setState(this._createState(nextProps.count));
		}
	}

	componentWillUpdate() {
		performance.mark('rendering-start');
	}

	componentDidUpdate() {
		performance.mark('rendering-stop');
		performance.measure('rendering', 'rendering-start', 'rendering-stop');
		const measure = performance.getEntriesByName('rendering')[0];
		this.props.onRender(measure.duration);
		performance.clearMarks();
		performance.clearMeasures();
		performance.clearResourceTimings();
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.elements}>
					{this.props.useSplitting ? (
						<List
							values={this.state.values.map(this._getProps)}
							getComponent={this.props.getElement}
							maxLength={this.props.maxLength}
						/>
					) : (
						this.state.values.map((i) => this.props.getElement(this._getProps(i)))
					)}
				</div>
			</div>
		);
	}
}