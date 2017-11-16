import * as React from 'react';
import { ITestProps } from '../interface';
import styles from './small.less';

export default function getSmallMarkup(props: ITestProps) {
	return (
		<div
			key={props.value}
			onMouseEnter={props.onSelect}
			onMouseLeave={props.onDeselect}
			className={styles.element + (props.selected ? ' ' + styles.selected : '')}
		>
			<span>{props.value}</span>
		</div>
	)
};