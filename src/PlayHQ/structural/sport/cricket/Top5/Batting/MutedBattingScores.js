import React from 'react';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';

const PlayerScore = styled.h1`
	width: 100%;
	text-align: left;
	text-transform: uppercase;
	margin: 0;
	padding: 0;
`;

const MutedBattingScores = ({COLOR, player, style}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font} = StyleConfig;
	return (
		<PlayerScore
			style={{
				...Font.Copy,
				...style,
				...TextStyles.assetSubtitle,
				color: COLOR,
				whiteSpace: 'nowrap',
				overflow: 'hidden',
			}}
		>
			{player.runs}
			{player.notOut ? '*' : ' '}
			<span
				style={{
					fontSize: '.6em',
					fontWeight: 400,
				}}
			>
				{/* {player.balls === 0 ? '' : `(${player.balls})`} */}
			</span>
		</PlayerScore>
	);
};

export default MutedBattingScores;
