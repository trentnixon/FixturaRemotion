import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {FromMiddle, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {restrictString} from '../../../../utils/copy';
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../context/VideoDataContext';

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	display: block;
	text-transform: uppercase;
	width: 100%;
	margin: 0;
`;

const HeaderItem = ({label, width, color, textAlign}) => {
	const frame = useCurrentFrame();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;

	const commonStyles = {
		...Font.Copy,
		...TextStyles.copySmall,
		color,
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		textAlign,
	};

	return (
		<HeaderCopy style={{...commonStyles, width}}>
			{restrictString(label, 35)}
		</HeaderCopy>
	);
};

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 0px 10px;
`;

export const BasicResultsMetaDataPoints = ({matchData}) => {
	const {StyleConfig, TextStyles} = useStylesContext();

	const {TIMINGS} = useLayoutContext();
	const {Color} = StyleConfig;
	const {type, round, gradeName} = matchData;
	const frame = useCurrentFrame();
	const {FPS_SCORECARD} = TIMINGS;

	return (
		<HeaderContainerStyles
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			<HeaderItem
				label={gradeName}
				width="50%"
				color={Color.Primary.BackgroundContractColor}
				textAlign="left"
			/>

			<HeaderItem
				label={`${type} - ${round}`}
				width="50%"
				color={Color.Primary.BackgroundContractColor}
				textAlign="right"
			/>
		</HeaderContainerStyles>
	);
};
