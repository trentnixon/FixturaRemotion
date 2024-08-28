import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {H, P} from '../../../../common/type/primitives';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseFromMiddle} from '../../../../Animation/ClipWipe';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';

const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 80%;
	height: auto;
	max-width: 100%;
	margin: 3em auto;
	padding: 1em;
	background: ${(props) => props.BackgroundContractColor};
`;

export const CricketMatchAbandoned = ({matchData, useColor = 'Primary'}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;

	const {homeTeam, awayTeam, status} = matchData;
	const {FPS_SCORECARD} = TIMINGS;

	const frame = useCurrentFrame();

	const PStyles = {
		...Font.Copy,
		...TextStyles.copyMedium,
		color: Color[useColor].Contrast,
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: '20px',
		opacity: interpolateOpacityByFrame(frame, 30, 90, 0, 1),
		clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
	};

	const HStyles = {
		...Font.Copy,
		...TextStyles.copyMedium,
		color: Color[useColor].Contrast,
		textAlign: 'center',
		textTransform: 'uppercase',

		opacity: interpolateOpacityByFrame(frame, 30, 90, 0, 1),
		clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
	};

	return (
		<MatchContainer
			BackgroundContractColor={Color[useColor].Main}
			style={{
				opacity: interpolateOpacityByFrame(frame, 30, 90, 0, 1),
				clipPath: EraseFromMiddle(FPS_SCORECARD - 15, 'Slow'),
			}}
		>
			<P {...PStyles}>
				{homeTeam.name} vs {awayTeam.name}
			</P>
			<H level="1" {...HStyles}>
				{status}
			</H>
		</MatchContainer>
	);
};
