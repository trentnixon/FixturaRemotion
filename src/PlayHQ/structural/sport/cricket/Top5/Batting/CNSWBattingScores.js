import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';

const PlayerScore = styled.h1`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	margin: 15px 0;
	padding: 0;
`;

const CNSWBattingScores = ({COLOR, player, style}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	return (
		<PlayerScore
			style={{
				...Font.Copy,
				...style,
				...TextStyles.copyXLargeBold,
				color: COLOR,
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

export default CNSWBattingScores;
