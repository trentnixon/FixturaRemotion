import styled from 'styled-components';
import {setOpacity} from '../../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromMiddle, FromTopToBottom} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 10px;
	margin-bottom: 15px;
	border-radius: ${(props) => props.borderRadius};
	background-color: ${(props) => setOpacity(props.BackgroundColor, 0.5)};
`;

const HeaderCopy = styled.p`
	font-style: normal;
	display: block;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.6em;
	line-height: 1.1em;
`;

const GameType = styled(HeaderCopy)`
	width: 15%;
`;

const Ground = styled(HeaderCopy)`
	text-align: center;
	width: 70%;
`;

const Round = styled(HeaderCopy)`
	width: 15%;
`;

export const HeaderContainer = (props) => {
	const {matchData, FPS_SCORECARD, TemplateVariation, StyleConfig} = props;
	const {type, ground, round, teamHome, teamAway} = matchData;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();

	if (teamHome === 'Bye' || teamAway === 'Bye') return false;
	return (
		<HeaderContainerStyles
			BackgroundColor={Color.Primary.Darken}
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
			<GameType
				style={{
					...Font.Copy,
					color: Color.Primary.BackgroundContractColor,
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				{type}
			</GameType>
 
			<Ground
				style={{
					...Font.Copy,
					color: Color.Primary.BackgroundContractColor,
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				{restrictString(ground, 35)}
			</Ground>
			<Round
				style={{
					...Font.Copy,
					color: Color.Primary.BackgroundContractColor,
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				{round}
			</Round>
		</HeaderContainerStyles>
	);
};
