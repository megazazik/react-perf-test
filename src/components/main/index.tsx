import * as React from 'react';
import styles from './styles.less';
import Runner from '../runner';
import { ITestProps } from '../interface';
import Stateless from '../markup/small';
import PureStatefull from '../stubs/pureStatefull';
import Statefull from '../stubs/statefull';

enum ComponentType {
	PureStatefull = 'pureStatefull',
	Statefull = 'statefull',
	Stateless = 'stateless',
	Native = 'native'
}

interface IState {
	count: number;
	optimized: boolean;
	type: ComponentType;
	maxLength: number;
	useSplitting: boolean;
	lastRenderTime: number;
}

export default class PerformanceTesting extends React.Component<{}, IState> {
	state: IState = {
		count: 1000,
		optimized: false,
		type: ComponentType.PureStatefull,
		maxLength: 10,
		useSplitting: false,
		lastRenderTime: 0
	}

	private _components = {
		[ComponentType.PureStatefull]: (props: ITestProps) => <PureStatefull key={props.value} {...props} />,
		[ComponentType.Statefull]: (props: ITestProps) => <Statefull key={props.value} {...props} />,
		[ComponentType.Stateless]: (props: ITestProps) => <Stateless key={props.value} {...props} />,
		[ComponentType.Native]: Stateless
	};

	private _optimizedChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({optimized: ev.currentTarget.checked})
	}

	private _countChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({count: +ev.currentTarget.value});
	}

	private _typeChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({type: ev.currentTarget.value as any});
	}

	private _maxLengthChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({maxLength: +ev.currentTarget.value});
	}

	private _useSplittingChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({useSplitting: ev.currentTarget.checked});
	}

	private _onRender = (time: number) => {
		this.setState({lastRenderTime: time});
	}
	
	render() {
		return (
			<div className={styles.container}>
				<table className={styles.params}>
					<thead>
						<tr>
							<th>Компонент</th>
							<th>Оптимизация</th>
							<th>Количество</th>
							<th>Разбиение списка</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								{Object.keys(ComponentType).map((type) => (
									<div key={type}>
										<label>
											{type}
											<input type="radio" value={ComponentType[type]} checked={this.state.type === ComponentType[type]} onChange={this._typeChanged}/>
										</label>
									</div>
								))}
							</td>
							<td>
								<label>
									Включена
									<input type="checkbox" checked={this.state.optimized} onChange={this._optimizedChanged}/>
								</label>
							</td>
							<td>
								<input type="text" value={this.state.count} onChange={this._countChanged}/>
							</td>
							<td>
								<label>
									Включено
									<input type="checkbox" checked={this.state.useSplitting} onChange={this._useSplittingChanged}/>
								</label>
								{this.state.useSplitting && [
									<br/>,
									<input type="text" value={this.state.maxLength} onChange={this._maxLengthChanged}/>
								]}
							</td>
						</tr>
					</tbody>
				</table>
				<div><h2>Last rendering time: {this.state.lastRenderTime} ms</h2></div>
				<Runner 
					count={this.state.count}
					optimized={this.state.optimized}
					getElement={this._components[this.state.type]}
					maxLength={this.state.maxLength}
					useSplitting={this.state.useSplitting}
					onRender={this._onRender}
				/>
			</div>
		);
	}
}