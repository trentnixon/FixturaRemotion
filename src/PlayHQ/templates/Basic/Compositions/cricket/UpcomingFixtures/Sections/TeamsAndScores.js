import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {restrictString} from '../../../../../../utils/copy';
import {
	FromTopToBottom,
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../../Animation/ClipWipe';

import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';

const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	padding: 15px 0;

	background-color: ${(props) => props.bgColor};
	border-radius: ${(props) => props.borderRadius};
`;

const TeamName = styled.h2`
	font-style: normal;
	font-weight: 600;
	font-size: 2em;
	line-height: 1em;
	width: 60%;
	margin: 0 20%;
	letter-spacing: -0.03em;
	text-transform: uppercase;

	text-align: center;
`;

const TeamScore = styled.h3`
	font-size: 2em;
	line-height: 1.2em;
	font-weight: 600;
	text-align: center;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: 0.05em;
	text-transform: uppercase;
`;

const LogoHolder = styled.div`
	position: absolute;
	z-index: 1000;
`;

export const TeamsAndScores = (props) => {
	const {matchData, FPS_SCORECARD, TemplateVariation, StyleConfig} = props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo} = matchData;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	const IMGSIZING = [120, 160, 120];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<TeamScore
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
					{gradeName}
				</TeamScore>
			</TeamScoreContainer>

			<TeamScoreContainer
				style={{
					clipPath: FromLeftToRight(7, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
				borderRadius={TemplateVariation.borderRadius}
				bgColor={Color.Primary.Darken}
			>
				<TeamName
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
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
					{teamHome}
				</TeamName>
			</TeamScoreContainer>
			<TeamScoreContainer>
				<LogoHolder
					style={{
						left: 10,
						top: '50%', // Align with the vertical center of the container
						transform: 'translateY(-50%)',
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
					<ImageWithFallback
						src={teamHomeLogo}
						style={{
							...teamHomeLogoStyles,
							borderRadius: '10%',
							objectFit: 'cover',
						}}
					/>
				</LogoHolder>
				<TeamScore
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
					vs
				</TeamScore>
				<LogoHolder
					style={{
						right: 10,
						top: '50%', // Align with the vertical center of the container
						transform: 'translateY(-50%)',
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
					<ImageWithFallback
						src={teamAwayLogo}
						style={{
							...teamAwayLogoStyles,
							borderRadius: '10%',
							objectFit: 'cover',
						}}
					/>
				</LogoHolder>
			</TeamScoreContainer>
			<TeamScoreContainer
				borderRadius={TemplateVariation.borderRadius}
				bgColor={Color.Secondary.Main}
				style={{
					clipPath: FromRightToLeft(7, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				<TeamName
					style={{
						...Font.Copy,
						color: Color.Secondary.Contrast,
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
					{teamAway}
				</TeamName>
			</TeamScoreContainer>
		</TeamsAndScoresContainer>
	);
};

const BYEContainer = (props) => {
	const {
		matchData,

		FPS_SCORECARD,
		TemplateVariation,
		StyleConfig,
	} = props;
	const {Font, Color} = StyleConfig;
	const {teamHome, teamAway, gradeName} = matchData;
	const frame = useCurrentFrame();
	const CreateBye = (teamHome, teamAway) => {
		let displayString;
		if (teamHome === 'Bye') {
			displayString = `${restrictString(teamAway, 30)} : Bye`;
		} else {
			displayString = `${restrictString(teamHome, 30)} : Bye`;
		}
		return displayString;
	};
	return (
		<TeamsAndScoresContainer>
			<TeamScoreContainer>
				<TeamScore
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
					{gradeName}
				</TeamScore>
			</TeamScoreContainer>
			<TeamScoreContainer
				style={{
					clipPath: FromLeftToRight(7, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
				borderRadius={TemplateVariation.borderRadius}
				bgColor={Color.Primary.Darken}
			>
				<TeamName
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
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
					{CreateBye(teamHome, teamAway)}
				</TeamName>
			</TeamScoreContainer>
		</TeamsAndScoresContainer>
	);
};
