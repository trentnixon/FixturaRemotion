import React from 'react';
import styled from 'styled-components';

const PlayerScore = styled.h1`
	width: 100%;
	font-style: normal;
	font-size: 5em;

	text-align: center;
	letter-spacing: -5px;
	text-transform: uppercase;
	margin: 0;
`;

const BasicBowlingScores = ({COLOR, player, Font}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...Font,
				fontWeight: 800,
			}}
		>
			{player.wickets}/{player.runs}
			<span
				style={{
					fontSize: '.6em',
					fontWeight: 400,
				}}
			>
				{player.param1 === 0 ? '' : `(${player.overs})`}
			</span>
		</PlayerScore>
	);
};

export default BasicBowlingScores;
