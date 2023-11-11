import styled from 'styled-components';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {GetBackgroundContractColorForText} from '../../../../utils/colors';

export const OrganisationName = ({
	THEME,
	FPS_MAIN,
	NAME,
	grouping_category,
	frame,
}) => {
	return (
		<ClubLabel
			style={{
				color: GetBackgroundContractColorForText(
					THEME.primary,
					THEME.secondary
				),
				fontFamily: 'Heebo',
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
				maxWidth:'650px'
			}}
		>
			{grouping_category}
		</ClubLabel> 
	);
};
const ClubLabel = styled.h1`
	font-size: 2em;
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
				fontFamily: 'Heebo',
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			{grouping_category}
		</SingleResultClubLabel>
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
