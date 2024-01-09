import styled from 'styled-components';
import {
	darkenColor,
	setOpacity,
	getContrastColor,
} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromMiddle, FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../utils/copy';
import {P} from '../../../Components/Common/type';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	width:80%;
	padding: 0 10px;
	margin-bottom: 15px;
	border-radius: ${(props) => props.borderRadius};
	background-color: ${(props) =>
		setOpacity(darkenColor(props.THEME.primary), 0.7)};
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
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {type, ground, round, teamHome, teamAway} = matchData;
	const frame = useCurrentFrame();
	const defaultTextStyle = {
		fontFamily: fontFamily,
		fontStyle: 'normal',
		fontWeight: '400',
		display: 'block',
		fontSize: '1.26em',
		letterSpacing: '-0.01em',
		textTransform: 'uppercase',
		width: '100%',
		color: getContrastColor(THEME.primary),
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
			THEME={THEME}
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
				<P {...defaultTextStyle}>{restrictString(ground, 40)}</P>
			</Ground>
			<Round>
				<P {...defaultTextStyle}>{round}</P>
			</Round>
		</HeaderContainerStyles>
	);
};
