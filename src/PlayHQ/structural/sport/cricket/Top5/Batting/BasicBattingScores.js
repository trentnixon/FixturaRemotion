import React from 'react';
import styled from 'styled-components';

const PlayerScore = styled.h1`
	width: 100%;
	font-style: normal;
	font-size: 5em;
	text-align: center;
	letter-spacing: -5px;
	text-transform: uppercase;
	margin: revert;
`;

const BasicBattingScores = ({COLOR, player, Font}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...Font,
				fontWeight: 400,
			}}
		>
			{player.runs}
			{player.notOut ? '*' : ' '}
			<span
				style={{
					fontSize: '.4em',
					fontWeight: 400,
				}}
			>
				{player.balls === 0 ? '' : `(${player.balls})`}
			</span>
		</PlayerScore>
	);
};

export default BasicBattingScores;
