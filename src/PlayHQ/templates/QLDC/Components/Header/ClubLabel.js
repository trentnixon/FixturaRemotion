import styled from 'styled-components';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {GetBackgroundContractColorForText, getContrastColor} from '../../../../utils/colors';

// Define a function to determine font size based on text length
const getDynamicFontSize = (textLength) => {
    if (textLength <= 10) return '3em'; // Normal size
    if (textLength <= 20) return '2.4em'; // Large size
    return '1.8em'; // Extra-large size for longer texts
};


const ClubLabel = styled.h1`
font-size: ${props => props.dynamicFontSize};
	line-height: 1.1em;
	margin: 0;
	font-style: normal;
	font-weight: 300;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	text-align: center;
`;


export const OrganisationName = ({
	THEME,
	FPS_MAIN,
	NAME,
	grouping_category,
	frame,
}) => {
	const dynamicFontSize = getDynamicFontSize(grouping_category.length);


	return (
		<ClubLabel
			style={{
				color: getContrastColor(THEME.primary),
				fontFamily: 'Roboto Condensed',
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
				maxWidth:'100%'
			}}
			dynamicFontSize={dynamicFontSize}
		>
			{grouping_category}
		</ClubLabel> 
	);
};

 
const SingleResultClubLabel = styled.h1`
	font-size: 1.5em;
	line-height: 1.1em;
	margin: 0;
	font-style: normal;
	font-weight: 300;
	letter-spacing: 0.02em;
	text-transform: uppercase;
	text-align: left;
`;

export const SingleResultOrganisationName = ({
	THEME,
	FPS_MAIN,
	NAME,
	grouping_category,
	frame,
}) => {
	return (
		<SingleResultClubLabel
			style={{
				color: GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				),
				fontFamily: 'Roboto',
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			{grouping_category}
		</SingleResultClubLabel>
	);
};
