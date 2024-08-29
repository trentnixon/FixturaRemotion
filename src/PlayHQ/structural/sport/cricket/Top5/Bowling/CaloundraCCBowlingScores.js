import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';

const PlayerScore = styled.h1`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	margin: revert;
	margin: 20px 0;
`;

const CaloundraCCBowlingScores = ({COLOR, player, Font}) => {
	const {TextStyles} = useStylesContext();
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...Font,
				...TextStyles.copyXLargeBold,
				lineHeight: 'none',
				letterSpacing: '-4px',
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
