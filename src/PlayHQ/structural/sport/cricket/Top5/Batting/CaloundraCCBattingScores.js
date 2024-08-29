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

const CaloundraCCBattingScores = ({COLOR, player, Font}) => {
	const {TextStyles} = useStylesContext();
	return (
		<PlayerScore
			style={{
				color: COLOR,
				...Font,
				...TextStyles.copyXLargeBold,
				lineHeight:'none',
				letterSpacing:'-4px'
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
