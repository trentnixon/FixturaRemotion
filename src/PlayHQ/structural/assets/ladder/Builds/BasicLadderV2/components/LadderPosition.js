import {darkenColor, getContrastColor} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {LadderPositionsItemRowV2} from '../../../TeamRow/LadderPositionsItemRowV2';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

const getTeamsLength = (ladder) => ladder.League.length + 1;

const findRowBackgroundColor = (isTeam, Color) => {
	return isTeam ? Color.Primary.Main : Color.Secondary.Main;
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

	const {StyleConfig, BuildProps} = useStylesContext();
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
				width: `${RowHeight / 1.5}px`,
				textAlign: 'center',
			},
			Img: {...TeamLogoStyles, borderRadius: '100%'},
		},
		Copy: {
			DataItem: {
				fontSize: '1.6em',
				color: getContrastColor(darkenColor(Color.Primary.Main)),
				...Font.Copy,
				textAlign: 'center',
				maxWidth: '5%',
				minWidth: '5%',
				marginLeft: '10px',
			},
			Item: {
				...Font.Copy,
				color: getContrastColor(darkenColor(useTHEMECOLOR)),
				fontSize: '1.6em',
				fontWeight: 400,
				width: '60%',
				marginLeft: '10px',
			},
		},
	};

	return (
		<LadderPositionsItemRowV2
			LadderDataPoints={LadderDataPoints}
			PositionContainerStyles={PositionContainerStyles}
			RowStyles={RowStyles}
			RowHeight={RowHeight}
			LADDERINT={LADDERINT}
			{...props}
		/>
	);
};
