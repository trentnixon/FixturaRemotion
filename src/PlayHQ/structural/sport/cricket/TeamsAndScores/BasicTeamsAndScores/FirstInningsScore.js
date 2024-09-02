import React from 'react';

import {generateTeamStyle} from './utils';
import styled from 'styled-components';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const FirstInningsRuns = styled.h3`
	margin: 0;
	text-align: left;
	text-transform: uppercase;
`;

const FirstInningsScore = ({FirstInnings, textAlign}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;

	if (FirstInnings === '1') return null;
	const generatedStyles = generateTeamStyle(
		TIMINGS.FPS_SCORECARD,
		textAlign,
		Font.Title,
		Color.Primary.BackgroundContractColor
	);

	return (
		<FirstInningsRuns style={{...generatedStyles, ...TextStyles.copySmallBold}}>
			{FirstInnings}
		</FirstInningsRuns>
	);
};

export default FirstInningsScore;
