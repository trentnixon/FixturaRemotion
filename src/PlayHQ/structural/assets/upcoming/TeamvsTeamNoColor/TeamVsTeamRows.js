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
import {useStylesContext} from '../../../../context/StyleContext';
import {useLayoutContext} from '../../../../context/LayoutContext';
import styled from 'styled-components';

const BorderContainer = styled.div`
	width: 100%;
	height: 100%;
	align-items: center;
	border: 2px solid;
	padding: 5px;
`;

export const TeamVsTeamNoColorRows = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo} = matchData;
	const frame = useCurrentFrame();
	const {TextStyles, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {TemplateVariation} = BuildProps;
	const IMGSIZING = [100, 100, 100];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);

	const gradeNameCustom = {
		...TextStyles.copySmallBold,
		color: TemplateVariation.useMutedColor,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		height: 'auto',
		width: '100%',
		textTransform: 'uppercase',
		textAlign: 'center',
		marginLeft: '20px',
	};

	if (teamHome === 'Bye' || teamAway === 'Bye')
		return <BYEContainer {...props} />;

	return (
		<BorderContainer
			style={{
				borderColor: TemplateVariation.useMutedColor,
				clipPath: FromLeftToRight(30, 'Slow'),
			}}
		>
			<TeamContainer
				START={7}
				LOGO={teamHomeLogo}
				STYLES={teamHomeLogoStyles}
				TEAM={teamHome}
				justifyContent="center"
			/>
			<FixtureLabels customStyles={gradeNameCustom}>VS</FixtureLabels>
			<TeamContainer
				START={14}
				LOGO={teamAwayLogo}
				STYLES={teamAwayLogoStyles}
				TEAM={teamAway}
				justifyContent="center"
			/>
		</BorderContainer>
	);
};

const BYEContainer = (props) => {
	const {matchData} = props;
	const {StyleConfig, BuildProps} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {teamHome, teamAway} = matchData;
	const {Font, Color} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;
	const {TemplateVariation} = BuildProps;
	const frame = useCurrentFrame();

	const gradeNameCustom = {
		color: Color.Primary.Contrast,
		...Font.Copy,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
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
