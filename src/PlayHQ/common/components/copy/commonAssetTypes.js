// ASSETS

import {P} from '../../type/primitives';

// LADDER
export const LadderHeaderItems = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{`${props.children}`}</P>;
};


export const LadderTeamName = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};

export const LadderDataItem = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};



// Upcoming Fixtures
export const FixtureLabels = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};

export const FixtureMetaData = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};


// Results
export const ResultsMetaData = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};

export const ResultsScore = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};
export const ResultsTextDefault = (props) => {
	const defaultTextStyle = {};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.children}</P>;
};
