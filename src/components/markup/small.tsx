import * as React from 'react';
import { ITestProps } from '../interface';
import styles from './small.less';

export default function getSmallMarkup(props: ITestProps) {
	return (
		<div
			key={props.value}
			onMouseEnter={props.onSelect}
			className={styles.element + (props.selected ? ' ' + styles.selected : '')}
			onClick={props.onSelect}
		>
			<span>{props.value}</span>
		</div>
	)
};