import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {LadderPositionsItemRowNoColor} from '../../../TeamRow/LadderPositionsItemRowNoColor';

const getTeamsLength = (ladder) => ladder.League.length + 1;

const findRowBackgroundColor = (isTeam, Color) => {
	return isTeam ? Color : 'transparent';
};

const getLogoStyles = (teamLogo, ContainerHeight, NumTeams) => {
	const IMGSIZING = [
		ContainerHeight / NumTeams / 1.5,
		ContainerHeight / NumTeams / 1.5,
		ContainerHeight / NumTeams / 1.5,
	];
	return calculateImageDimensions(teamLogo, IMGSIZING);
};

export const LadderPosition = (props) => {
	const {LadderItem, LadderDataPoints, LADDERINT, isTeam, Ladder} = props;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_LADDER} = TIMINGS;
	const {Font} = StyleConfig;
	const {teamLogo} = LadderItem;
	const ContainerHeight = 880;
	const frame = useCurrentFrame();
	const NumTeams = getTeamsLength(Ladder);
	const useTHEMECOLOR = findRowBackgroundColor(
		isTeam,
		TemplateVariation.useMutedColor
	);
	const TeamLogoStyles = getLogoStyles(teamLogo, ContainerHeight, NumTeams);
	const RowHeight = ContainerHeight / NumTeams;

	const PositionContainerStyles = {
		borderRadius: TemplateVariation.borderRadius,
		clipPath: FromLeftToRight(30 + LADDERINT * 3, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_LADDER - 30,
			FPS_LADDER,
			1,
			0
		),
		backgroundColor: useTHEMECOLOR,
		height: `${RowHeight - 4}px`,
	};

	const RowStyles = {
		Logo: {
			ImgContainer: {
				textAlign: 'center',
			},
			Img: {...TeamLogoStyles, borderRadius: '5%'},
		},
		Copy: {
			DataItem: {
				...TextStyles.copySmallBold,
				color: isTeam ? 'white' : TemplateVariation.useMutedColor,

				minWidth: `${100 / LadderDataPoints.length}%`,
				marginLeft: '0px',
			},
			Item: {
				...Font.Copy,
				...TextStyles.copySmall,
				color: isTeam ? 'white' : TemplateVariation.useMutedColor,
				width: '75%',
				marginRight: '10px',
			},
		},
	};

	return (
		<LadderPositionsItemRowNoColor
			LadderDataPoints={LadderDataPoints}
			PositionContainerStyles={PositionContainerStyles}
			RowStyles={RowStyles}
			RowHeight={RowHeight}
			LADDERINT={LADDERINT}
			{...props}
		/>
	);
};
