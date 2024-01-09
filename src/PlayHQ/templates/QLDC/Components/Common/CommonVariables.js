import React from 'react';
import {P} from './type';
import {restrictName} from '../../../../utils/copy';
import styled from 'styled-components';

// Component for displaying Team name

export const DisplayTeamName = (props) => {
	const defaultTextStyle = {
		fontSize: '1em',
		fontWeight: '400',
		lineHeight: '1.1em',
		textAlign: 'left',
		margin: '0 0 0 10px',
		textTransform: 'uppercase',
	};
		
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.name}</P>;
};

export const DisplayTeamScore = (props) => {
	const defaultTextStyle = {
		textTransform: 'uppercase',
	};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.name}</P>;
};

// Component for displaying grade name
export const DisplayGradeName = (props) => {
	const defaultTextStyle = {
		fontSize: '1.5rem',
		fontWeight: '600',
		lineHeight: '1.6',
		textAlign: 'right',
		margin: '0',
		padding: '0',
		height: '42px',
	};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return <P {...combinedStyles}>{props.matchData.gradeName}</P>;
};

export const DisplayMatchType = (props) => {
	const defaultTextStyle = {
		fontSize: '1.5rem',
		fontWeight: '600',
		lineHeight: '1.6',
		textAlign: 'right',
		margin: '0',
		padding: '0',
		height: '42px',
	};
	/*  console.log(props.customStyles) */
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	return (
		<P
			{...combinedStyles}
		>{`${props.matchData.type} | ${props.matchData.round}`}</P>
	);
};

export const DisplayPlayerName = (props) => {
	const {NAME, restrictBy=20} = props;
	const restrictedNames = ['Total', 'Extras', 'Private Player']; // Replace with your array of restricted names

	const defaultTextStyle = {
		marginRight: '2px',
		letterSpacing: '-2px',
		padding: '0px',
		fontSize: '1.1em',
		fontWeight: '600',
		whiteSpace: 'nowrap',
	};
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};
	if (NAME && !restrictedNames.includes(NAME)) {
		return <P {...combinedStyles}>{restrictName(NAME, restrictBy)}</P>;
	}

	return false;
};

export const PerformanceBatting = (props) => {
	const {Name, Runs, isNotOut, Balls} = props.Performance;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Name) || restrictedValues.includes(Runs)) {
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
	return (
		<P {...combinedStyles}>
			{Runs}
			{isNotOut ? '*' : ''}
			{Balls !== '0' && Balls !== 'undefined' ? ` (${Balls})` : false}
		</P>
	);
};

export const PerformanceBowling = (props) => {
	const {Performance} = props;
	const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0]; // Array contains both empty string and value 0

	if (restrictedValues.includes(Performance.Name)) {
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
	return (
		<P
			{...combinedStyles}
		>{`${Performance.Wickets}/${Performance.Runs} (${Performance.Overs})`}</P>
	);
};

export const DisplayInningsScore = (props) => {
	const {score, overs} = props;

	const RunsStyles = {
		fontSize: '1.1em',
		lineHeight: '1em',
		fontWeight: '400',
		margin: '0',
		padding: '5px 0',
		textAlign: 'center',
		textTransform: 'uppercase',
	};
	const OversStyles = {
		fontSize: '0.8em',
		lineHeight: '1em',
		fontWeight: '400',
		margin: '0',
		textAlign: 'center',
		textTransform: 'uppercase',
	};

	const combinedRunsStyles = {...RunsStyles, ...props.customStyles};
	const combinedOversStyles = {...OversStyles, ...props.customStyles};
	return (
		<>
			<DisplayTeamScore name={score} customStyles={combinedRunsStyles} />
			{overs && (
				<DisplayTeamScore name={overs} customStyles={combinedOversStyles} />
			)}
		</>
	);
};

export const InningsScore = (props) => {
	const {FirstInnings, Type} = props;

	const defaultTextStyle = {};
	/*  console.log(props.customStyles) */
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};

	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return <P {...combinedStyles}>{FirstInnings}</P>;
};

export const FirstInningsScore = (props) => {
	const {FirstInnings, Type} = props;

	const defaultTextStyle = {
		fontSize: '1.1em',
		lineHeight: '1em',
		fontWeight: '400',
		margin: '0',
		padding: '5px 0',
		textAlign: 'center',
		textTransform: 'uppercase',
	};
	/*  console.log(props.customStyles) */
	const combinedStyles = {...defaultTextStyle, ...props.customStyles};

	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return <P {...combinedStyles}>{FirstInnings}&nbsp;</P>;
};
