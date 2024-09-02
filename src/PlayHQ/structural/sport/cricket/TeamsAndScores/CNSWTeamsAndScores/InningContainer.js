import React from 'react';
import styled from 'styled-components';
import {TeamDetail} from './TeamsAndScores';
import {CNSWPlayerPerformances} from '../../PlayerPerformances/CNSW_PlayerPerformances';

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
		battingPerformances,
		bowlingPerformances,
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
				firstInnings={firstInnings}
				Name={name}
				Type={type}
				direction={direction}
				justifyContent={justifyContent}
				textAlign={textAlign}
			/>
			<CNSWPlayerPerformances
				Batting={battingPerformances}
				Bowling={bowlingPerformances}
			/>
		</InningContainerStyles>
	);
};
