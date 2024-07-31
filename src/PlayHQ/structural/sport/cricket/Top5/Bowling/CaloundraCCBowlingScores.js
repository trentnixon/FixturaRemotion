import React from 'react';
import styled from 'styled-components';

const PlayerScore = styled.h1`
	width: 100%;
	font-style: normal;
	font-size: 5em;
	text-align: center;
	letter-spacing: -2px;
	text-transform: uppercase;
	margin: revert;
	font-weight: 400;
	margin: 20px 0;
`;

const CaloundraCCBowlingScores = ({COLOR, player, Font}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...Font,
			}}
		>
			{player.wickets}/{player.runs}
			<span
				style={{
					fontSize: '.6em',
				}}
			>
				{player.param1 === 0 ? '' : `(${player.overs})`}
			</span>
		</PlayerScore>
	);
};

export default CaloundraCCBowlingScores;
