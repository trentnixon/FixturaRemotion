import React from 'react';

import {generateTeamStyle} from './utils';
import styled from 'styled-components';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const FirstInningsRuns = styled.h3`
	font-size: 2em;
	line-height: 1em;
	margin: 0;
	text-align: left;
	letter-spacing: 0em;
	text-transform: uppercase;
`;

const FirstInningsScore = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const {FirstInnings, Type} = DATA.VIDEOMETA;

	if (Type !== 'Two Day+' || FirstInnings === '1') return null;

	return (
		<FirstInningsRuns
			style={generateTeamStyle(
				TIMINGS.FPS_SCORECARD,
				'left',
				Font.Title,
				Color.Primary.BackgroundContractColor
			)}
		>
			{FirstInnings}
		</FirstInningsRuns>
	);
};

export default FirstInningsScore;
