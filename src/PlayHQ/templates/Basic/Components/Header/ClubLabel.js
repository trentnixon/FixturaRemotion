import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {VideoHeader} from '../../../../common/components/copy/titles';

export const OrganisationName = ({
	FPS_MAIN,
	groupingCategory,
	frame,
	StyleConfig,
}) => {
	const {Color, Font} = StyleConfig;
	const styleObj = {
		...Font.Title,
		color: Color.Primary.BackgroundContractColor,
		fontSize: '1.6em',
		lineHeight: '1.1em',
		fontStyle: 'normal',
		letterSpacing: '0.02em',
		textTransform: 'uppercase',
		textAlign: 'left',
		maxWidth: '500px'
	};

	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return (
		<VideoHeader
			styleObj={styleObj}
			animationObj={animationObj}
			value={groupingCategory}
		/>
	);
};

export const SingleResultOrganisationName = ({
	FPS_MAIN,
	grouping_category,
	frame,
	StyleConfig,
}) => {
	const {Color, Font} = StyleConfig;
	const styleObj = {
		...Font.Title,
		color: Color.Primary.BackgroundContractColor,
		margin: '0',
		fontSize: '1.5em',
		lineHeight: '1.1em',
		fontStyle: 'normal',
		letterSpacing: '0.02em',
		textTransform: 'uppercase',
		textAlign: 'left',
		
	};

	const animationObj = {
		opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
		clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
	};
	return (
		<VideoHeader
			styleObj={styleObj}
			animationObj={animationObj}
			value={grouping_category}
		/>
	);
};

/* <SingleResultClubLabel
			style={{
				...Font.TitleAlt,
				color: Color.Primary.BackgroundContractColor,
				opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
				clipPath: EraseToMiddleFromTop(FPS_MAIN - 30, 'Wobbly'),
			}}
		>
			{grouping_category}
		</SingleResultClubLabel> */
