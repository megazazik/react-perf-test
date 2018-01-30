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
	Native = 'html'
}

interface IState {
	count: number;
	optimized: boolean;
	type: ComponentType;
	maxLength: number;
	useSplitting: boolean;
	lastRenderTime: number;
	allRenderTime: number;
	renderCount: number;
}

export default class PerformanceTesting extends React.Component<{}, IState> {
	state: IState = {
		count: 1000,
		optimized: false,
		type: ComponentType.PureStatefull,
		maxLength: 10,
		useSplitting: false,
		lastRenderTime: 0,
		allRenderTime: 0,
		renderCount: -1
	}

	private _components = {
		[ComponentType.PureStatefull]: (props: ITestProps) => <PureStatefull key={props.value} {...props} />,
		[ComponentType.Statefull]: (props: ITestProps) => <Statefull key={props.value} {...props} />,
		[ComponentType.Stateless]: (props: ITestProps) => <Stateless key={props.value} {...props} />,
		[ComponentType.Native]: Stateless
	};

	private _optimizedChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			optimized: ev.currentTarget.checked,
			allRenderTime: 0,
			renderCount: -1
		})
	}

	private _countChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			count: +ev.currentTarget.value,
			allRenderTime: 0,
			renderCount: -1
		});
	}

	private _typeChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			type: ev.currentTarget.value as any,
			allRenderTime: 0,
			renderCount: -1
		});
	}

	private _maxLengthChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			maxLength: +ev.currentTarget.value,
			allRenderTime: 0,
			renderCount: -1
		});
	}

	private _useSplittingChanged = (ev: React.SyntheticEvent<HTMLInputElement>) => {
		this.setState({
			useSplitting: ev.currentTarget.checked,
			allRenderTime: 0,
			renderCount: -1
		});
	}

	private _resetCount = () => {
		this.setState({
			allRenderTime: 0,
			renderCount: -1
		});
	}

	private _onRender = (time: number) => {
		this.setState((prevState) => ({
			lastRenderTime: time,
			renderCount: prevState.renderCount + 1,
			allRenderTime: prevState.renderCount >= 0 ? prevState.allRenderTime + time : 0
		}));
	}
	
	render() {
		return (
			<div className={styles.container}>
				<div className={styles.params}>
					<div className={styles.param}>
						<div className={styles.paramTitle}>Компонент</div>
						<div className={styles.paramField}>
							{Object.keys(ComponentType).map((type) => (
								<div key={type}>
									<label>
										{type}
										<input type="radio" value={ComponentType[type]} checked={this.state.type === ComponentType[type]} onChange={this._typeChanged}/>
									</label>
								</div>
							))}
						</div>
					</div>
					<div className={styles.param}>
						<div className={styles.paramTitle}>Оптимизация</div>
						<div className={styles.paramField}>
							<label>
								Включена
								<input type="checkbox" checked={this.state.optimized} onChange={this._optimizedChanged}/>
							</label>
						</div>
					</div>
					<div className={styles.paramGroup}>
						<div className={styles.param}>
							<div className={styles.paramTitle}>Количество компонентов</div>
							<div className={styles.paramField}>
								<input type="text" value={this.state.count} onChange={this._countChanged}/>
							</div>
						</div>
						<div className={styles.param}>
							<div className={styles.paramTitle}>Разбиение списка</div>
							<div className={styles.paramField}>
								<label>
									Включено
									<input type="checkbox" checked={this.state.useSplitting} onChange={this._useSplittingChanged}/>
								</label>
								{this.state.useSplitting && [
									<br/>,
									<input type="text" value={this.state.maxLength} onChange={this._maxLengthChanged}/>
								]}
							</div>
						</div>
					</div>
				</div>
				<div><h2>Время последнего обновления: {this.state.lastRenderTime} мс</h2></div>
				<div>
					<h2>Среднее время обновления: {
						this.state.renderCount > 0 ? 
							this.state.allRenderTime / this.state.renderCount :
							'---'
					} мс <button onClick={this._resetCount}>Сбросить</button></h2>
					Для измерения времени обновления нужно водить курсором мыши по прямоугольникам снизу или нажимать на них (для телефонов)
					<br/><br/>
				</div>
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