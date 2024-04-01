import { P } from "../../type/primitives";

export const PerformanceGoalScorers = (props) => {
	const {Name, goals} = props.Performance;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name) || restrictedValues.includes(goals)) {
		return false;
	}
	const defaultTextStyle = {
		textAlign: 'center',
		letterSpacing: '-2px',
		padding: '0px',
		fontSize: '1em',
		fontWeight: '400',
		whiteSpace: 'nowrap',
	};

	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{goals}</P>;
};