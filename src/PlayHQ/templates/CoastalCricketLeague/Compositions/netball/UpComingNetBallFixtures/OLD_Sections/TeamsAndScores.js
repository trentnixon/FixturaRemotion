import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {restrictString} from '../../../../../../utils/copy';
import {
	FromTopToBottom,
	FromLeftToRight,
} from '../../../../../../Animation/ClipWipe';

import {DisplayGradeName} from '../../../../Components/Common/OLD_CommonVariables';
import {P} from '../../../../Components/Common/type';

import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {TeamContainer} from '../../../../../../structural/assets/upcoming/TeamVsTeamRows/components/TeamContainer';
import {MetaDataTimeLocation} from '../../../../../../structural/assets/upcoming/FixtureMetadata/TimeLocation/TimeLocation';

const StructureMainBlock = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%; // Takes full width of the container
	margin-bottom: 5px;
`;
const StructureSidebarBlock = styled.div`
	width: 20%; // Takes 25% width of the container
	display: flex;
	justify-content: flex-end;
	align-items: normal;
	height: 80px;
	padding-left: 5px;
`;

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
	font-weight: 400;
	font-size: 2em;
	line-height: 1em;
	width: 100%;
	margin: 0 10px;
	letter-spacing: -0.03em;
	text-transform: uppercase;
	text-align: left;
`;

export const TeamsAndScores = (props) => {
	const {matchData, fontFamily, FPS_SCORECARD, StyleConfig, TemplateVariation} =
		props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo} = matchData;
	const {Font, Color} = StyleConfig;

	const frame = useCurrentFrame();
	const IMGSIZING = [100, 100, 100];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const gradeNameCustom = {
		color: Color.Primary.Contrast, 
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
		fontSize: '2em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		textAlign: 'right',
	};

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<>
			<TeamContainer
				StyleConfig={StyleConfig}
				FPS_SCORECARD={FPS_SCORECARD}
				START={7}
				LOGO={teamHomeLogo}
				STYLES={teamHomeLogoStyles}
				TEAM={teamHome}
				fontFamily={fontFamily}
				TemplateVariation={TemplateVariation}
				justifyContent="flex-start"
			/>
			<TeamScoreContainer>
				<P {...gradeNameCustom}> vs</P>
			</TeamScoreContainer>
			<TeamContainer
				StyleConfig={StyleConfig}
				FPS_SCORECARD={FPS_SCORECARD}
				START={14}
				LOGO={teamAwayLogo}
				STYLES={teamAwayLogoStyles}
				TEAM={teamAway}
				fontFamily={fontFamily}
				TemplateVariation={TemplateVariation}
				justifyContent="flex-end"
			/>
			<StructureMainBlock>
				<StructureSidebarBlock />
				<MetaDataTimeLocation {...props} CustomStyle={{width: '80%'}} />
			</StructureMainBlock>
		</>
	);
};

const BYEContainer = (props) => {
	const {matchData, FPS_SCORECARD, TemplateVariation, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const {teamHome, teamAway} = matchData;
	const frame = useCurrentFrame();

	const gradeNameCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
		fontSize: '2em',
		lineHeight: '1.2em',
		fontWeight: '400',
		height: 'auto',
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
		textAlign: 'right',
	};

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
				<DisplayGradeName {...props} customStyles={gradeNameCustom} />
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
