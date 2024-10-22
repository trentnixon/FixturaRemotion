import React from 'react';
import styled from 'styled-components';
import {TeamDetail} from './TeamsAndScores';
import {MUTEDPlayerPerformances} from '../../PlayerPerformances/Muted_PlayerPerformances';

const InningContainerStyles = styled.div`
	margin-bottom: ${(props) => props.bottom};
	width: 100%;
	filter: drop-shadow(10px 10px 10px rgba(0, 0, 0, 0.25));
`;

export const InningContainer = (props) => {
	const {
		team,
		imgStyles,
		score,
		overs,
		firstInnings,
		name,
		type,
		performances,
		statType,
		direction = 'row',
		justifyContent = 'flex-start',
		textAlign = 'right',
		bottom,
	} = props;

	return (
		<InningContainerStyles bottom={bottom}>
			<TeamDetail
				team={team}
				imgStyles={imgStyles}
				score={score}
				overs={overs}
				FirstInnings={firstInnings}
				Name={name}
				Type={type}
				direction={direction}
				justifyContent={justifyContent}
				textAlign={textAlign}
			/>
			<MUTEDPlayerPerformances
				performances={performances}
				statType={statType}
			/>
		</InningContainerStyles>
	);
};
