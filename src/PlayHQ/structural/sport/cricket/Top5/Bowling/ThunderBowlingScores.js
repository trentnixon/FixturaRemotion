import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';

const PlayerScore = styled.h1`
	width: 100%;
	text-align: center;
	text-transform: uppercase;
	margin: 0;
	padding: 0;
`;

const ThunderBowlingScores = ({COLOR, player, style}) => {
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
			{player.wickets}/{player.runs}
			<span
				style={{
					fontSize: '.6em',
					fontWeight: 400,
				}}
			>
				{player.overs === 0 ? '' : `(${player.overs})`}
			</span>
		</PlayerScore>
	);
};

export default ThunderBowlingScores;
