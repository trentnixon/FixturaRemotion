import React from 'react';

import {generateTeamStyle} from './utils';
import styled from 'styled-components';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const FirstInningsRuns = styled.h3`
	margin: 0;
	text-align: left;
	text-transform: uppercase;
`;

const FirstInningsScore = ({firstInnings, textAlign}) => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;

	if (firstInnings === '1') return null;
	const generatedStyles = generateTeamStyle(
		TIMINGS.FPS_SCORECARD,
		textAlign,
		Font.Title,
		Color.Primary.Contrast
	);
	return (
		<FirstInningsRuns style={{...generatedStyles, ...TextStyles.copySmall}}>
			{firstInnings}
		</FirstInningsRuns>
	);
};

export default FirstInningsScore;
