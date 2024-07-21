import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';
import {P} from '../../../../Components/Common/DEPRECATED_type';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width: 730px;
	padding: 0 10px;
	margin-bottom: 15px;
	border-radius: ${(props) => props.borderRadius};
	background-color: ${(props) => props.backgroundColor};
`;

const GameType = styled.div`
	width: 15%;
`;

const Ground = styled.div`
	text-align: center;
	width: 70%;
`;

const Round = styled.div`
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;

	const {type, ground, round, teamHome, teamAway} = matchData;

	const frame = useCurrentFrame();
	const defaultTextStyle = {
		...Font.Copy,
		display: 'block',
		fontSize: '1.4em',
		letterSpacing: '-0.01em',
		textTransform: 'uppercase',
		width: '100%',
		color: Color.Primary.Contrast,
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		textAlign: 'center',
	};

	if (teamHome === 'Bye' || teamAway === 'Bye') return false;
	return (
		<HeaderContainerStyles
			backgroundColor={Color.Primary.Opacity(0.8)}
			borderRadius={TemplateVariation.borderRadius}
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			<GameType>
				<P {...defaultTextStyle}>{type}</P>
			</GameType>
			<Ground>
				<P {...defaultTextStyle}>{restrictString(ground, 30)}</P>
			</Ground>
			<Round>
				<P {...defaultTextStyle}>{round}</P>
			</Round>
		</HeaderContainerStyles>
	);
};
