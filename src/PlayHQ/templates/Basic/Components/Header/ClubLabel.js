import styled from 'styled-components';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

export const OrganisationName = ({
	FPS_MAIN,
	grouping_category,
	frame,
	StyleConfig,
}) => {
	const {Color, Font} = StyleConfig;

	return (
		<ClubLabel
			style={{
				...Font.TitleAlt,
				color: Color.Primary.BackgroundContractColor,
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
				maxWidth: '650px',
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
	letter-spacing: 0.02em;
	text-transform: uppercase;
	text-align: left;
`;

export const SingleResultOrganisationName = ({
	FPS_MAIN,
	grouping_category,
	frame,
	StyleConfig,
}) => {
	const {Color, Font} = StyleConfig;
	return (
		<SingleResultClubLabel
			style={{
				...Font.TitleAlt,
				color: Color.Primary.BackgroundContractColor,
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
	letter-spacing: 0.02em;
	text-transform: uppercase;
	text-align: left;
`;
