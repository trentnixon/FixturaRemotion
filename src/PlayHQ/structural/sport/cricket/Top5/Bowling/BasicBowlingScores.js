import React from 'react';
import styled from 'styled-components';

const PlayerScore = styled.h1`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	margin: revert;
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
					fontSize: '.5em',
				}}
			>
				{player.param1 === 0 ? '' : `(${player.overs})`}
			</span>
		</PlayerScore>
	);
};

export default BasicBowlingScores;
