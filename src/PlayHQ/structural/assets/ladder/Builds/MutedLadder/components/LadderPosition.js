import {getContrastColor} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {LadderPositionsItemRowV3} from '../../../TeamRow/LadderPositionsItemRowV3';
import {LadderPositionsItemRowNoColor} from '../../../TeamRow/LadderPositionsItemRowNoColor';

const getTeamsLength = (ladder) => ladder.League.length + 1;

const findRowBackgroundColor = (isTeam, Color) => {
	return isTeam ? Color.Secondary.Main : 'transparent';
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
	const {Font, Color} = StyleConfig;
	const {teamLogo} = LadderItem;
	const ContainerHeight = 880;
	const frame = useCurrentFrame();
	const NumTeams = getTeamsLength(Ladder);
	const useTHEMECOLOR = findRowBackgroundColor(isTeam, Color);
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
			Img: {...TeamLogoStyles, borderRadius: '100%'},
		},
		Copy: {
			DataItem: {
				...TextStyles.copySmall,
				color: 'White',
				...Font.Copy,
				textAlign: 'center',
				minWidth: `${100 / LadderDataPoints.length}%`,
				marginLeft: '0px',
			},
			Item: {
				...Font.Copy,
				...TextStyles.copySmall,
				color: getContrastColor('white'),
				width: '60%',
				marginLeft: '0px',
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
