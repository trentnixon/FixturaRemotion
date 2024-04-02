import {useCurrentFrame} from 'remotion';

import {
	StructureMainBlock,
	StructureSidebarBlock,
	TeamName,
	TeamScoreContainer,
	TeamsAndScoresContainer,
} from './components/sharedStyles';
import {calculateImageDimensions} from '../../../../utils/global/calculateImageDimensions';
import {FromLeftToRight, FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {TeamContainer} from './components/TeamContainer';
import {restrictString} from '../../../../utils/copy';
import DisplayGradeName from '../TeamLogoTeamNameBars/components/DisplayGradeName';
import {FixtureLabels} from '../../../../common/components/copy/commonAssetTypes';
import {TwoMetaPoints} from '../../common/FixtureMetadata/TwoMetaPoints/TwoMetaPoints';

export const TeamVsTeamRows = (props) => {
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
				<FixtureLabels customStyles={gradeNameCustom}>VS</FixtureLabels>
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
				<TwoMetaPoints
					{...props}
					CustomStyle={{width: '80%'}}
					MetaPoints={['round', 'time']}
				/>
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
