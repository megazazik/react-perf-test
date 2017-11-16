export interface ITestProps {
	value: number;
	selected: boolean;
	onSelect: () => void;
	onDeselect: () => void;
}