import * as React from 'react';
import styles from './styles.less';
import Perf from 'react-addons-perf';
import { ITestProps } from '../interface';
import List from '../list2';

export interface IProps {
	getElement(props: ITestProps): JSX.Element;
	optimized?: boolean;
	count: number;
	maxLength: number;
	useSplitting?: boolean;
	onRender(time: number): void;
}

interface IState {
	processing: boolean;
	selectedValues: boolean[];
	values: number[];
}

export default class TestsRunner extends React.PureComponent<IProps, IState> {
	public state: IState = this._createState(this.props.count);

	private _createState(count: number) {
		return {
			processing: false,
			values: Array.apply(null, Array(count)).map((_, i) => i),
			selectedValues: Array.apply(null, Array(count)).map((_) => false)
		}
	}

	private _cachedOnChange = () => {};

	private _onSelectCallbacks = [];
	private _createOnSelect(value: number) {
		return () => this.setState((prevState: IState) => {
			const newValues = [...prevState.selectedValues];
			newValues[value] = true;
			return {selectedValues: newValues}
		})
	}
	private _getOnSelect(value: number) {
		if (this._onSelectCallbacks[value] === undefined) {
			this._onSelectCallbacks[value] = this._createOnSelect(value);
		}
		return this._onSelectCallbacks[value];
	}

	private _onDeselectCallbacks = [];
	private _createOnDeselect(value: number) {
		return () => this.setState((prevState: IState) => {
			const newValues = [...prevState.selectedValues];
			newValues[value] = false;
			return {selectedValues: newValues}
		});
	}
	private _getOnDeselect(value: number) {
		if (this._onDeselectCallbacks[value] === undefined) {
			this._onDeselectCallbacks[value] = this._createOnDeselect(value);
		}
		return this._onDeselectCallbacks[value];
	}

	private _getProps = (value: number): ITestProps => {
		return {
			value,
			selected: this.state.selectedValues[value],
			onSelect: this.props.optimized ? this._getOnSelect(value) : this._createOnSelect(value),
			onDeselect: this.props.optimized ? this._getOnDeselect(value) : this._createOnDeselect(value)
		}
	}

	public componentWillReceiveProps(nextProps: IProps) {
		if (this.props.count !== nextProps.count) {
			this.setState(this._createState(nextProps.count));
		}
	}

	private _start = () => {
		Perf.start();
		this.setState({processing: true});
	}

	componentWillUpdate() {
		performance.mark('rendering-start');
	}

	componentDidUpdate() {
		if (this.state.processing) {
			Perf.stop();
			Perf.printInclusive();
			Perf.printWasted();
			this.setState({processing: false});
		}
		performance.mark('rendering-stop');
		performance.measure('rendering', 'rendering-start', 'rendering-stop');
		const measure = performance.getEntriesByName('rendering')[0];
		console.log(`Rendering time: ${measure.duration} ms`);
		this.props.onRender(measure.duration);
		performance.clearMarks();
		performance.clearMeasures();
		performance.clearResourceTimings();
	}

	render() {
		return (
			<div className={styles.container}>
				<div className={styles.buttons}>
					<button onClick={this._start}>Запуск</button>
				</div>
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