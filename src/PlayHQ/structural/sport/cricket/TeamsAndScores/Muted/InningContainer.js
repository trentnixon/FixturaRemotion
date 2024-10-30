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
		limit = 2,
	} = props;

	return (
		<InningContainerStyles bottom={bottom}>
			<TeamDetail
				team={team}
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
				limit={limit}
			/>
		</InningContainerStyles>
	);
};
