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

const CaloundraCCBattingScores = ({COLOR, player, Font}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...Font,
			}}
		>
			{player.runs}
			{player.notOut ? '*' : ' '}
			<span
				style={{
					fontSize: '.4em',
				}}
			>
				{player.balls === 0 ? '' : `(${player.balls})`}
			</span>
		</PlayerScore>
	);
};

export default CaloundraCCBattingScores;
