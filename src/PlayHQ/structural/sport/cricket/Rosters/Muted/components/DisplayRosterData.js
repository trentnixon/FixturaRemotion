import styled from 'styled-components';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {HeaderContainer} from './HeaderContainer';
import {DisplayRoster} from './DisplayRoster';
import {MutedDivider} from '../../../../../../templates/Muted/Components/Common/Divider';
import {filter} from 'lodash';

const FixtureData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	padding: 0px 10px;
	margin: 0px 0 0 0;
	width: 730px;
	position: relative;
	height: 100vh;
`;
const FixtureDataInner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: strat;
	padding: 0px 10px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	margin: 0 auto;
	justify-content: flex-start;
	align-items: flex-start;
	align-content: flex-start;
	min-height: auto;
`;

const TeamName = styled.h2`
	text-transform: uppercase;
	margin: 15px 30px 0 0;
	text-align: left;
	width: 100%;
	padding: 0%;
`;
const GradeName = styled.h2`
	text-transform: uppercase;
	margin: 0 0 35px;
	text-align: left;
	width: 100%;
	padding: 0%;
`;

const LogoHolder = styled.div`
	z-index: 1000;
	padding: 0;
	background-color: ${(props) => props.BGColor};
	width: 100%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	border-radius: ${(props) => props.borderRadius};
	margin: 0;
`;

export const DisplayRosterData = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo, isHomeTeam} =
		matchData;
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;

	const {Font} = StyleConfig;

	// Original sizing
	const originalSizing = [60, 60, 60];

	// Adjusted sizing
	const largerTeamSizing = originalSizing.map((size) => size * 2.2); // Double the size

	const firstTeamLogoStyles = calculateImageDimensions(
		isHomeTeam ? teamHomeLogo : teamAwayLogo,
		largerTeamSizing
	);

	return (
		<FixtureData>
			<FixtureDataInner>
				<DisplayGradeName
					TEAM={matchData.gradeName}
					STYLE={{
						...Font.Copy,
						...TextStyles.copySmallBold,
						color: TemplateVariation.useMutedColor,
					}}
				/>
				<LogoContainer>
					<DisplayLogo
						LOGO={isHomeTeam ? teamHomeLogo : teamAwayLogo}
						borderRadius={TemplateVariation.borderRadius}
						STYLES={{
							...firstTeamLogoStyles,
							objectFit: 'contain',
							filter: 'grayscale(80%)',
						}}
					/>
					<DisplayLogo
						LOGO={isHomeTeam ? teamAwayLogo : teamHomeLogo}
						borderRadius={TemplateVariation.borderRadius}
						STYLES={{
							...firstTeamLogoStyles,
							objectFit: 'contain',
							borderRadius: '100%',
							filter: 'grayscale(80%)',
						}}
					/>
				</LogoContainer>

				<LogoContainer>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamHome : teamAway}
						STYLE={{
							...Font.Copy,
							...TextStyles.copySmallBold,
							color: TemplateVariation.useMutedColor,
						}}
					/>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamAway : teamHome}
						STYLE={{
							...Font.Copy,
							...TextStyles.copySmallBold,
							color: TemplateVariation.useMutedColor,
						}}
					/>
				</LogoContainer>

				<DisplayRoster {...props} matchData={matchData} />
				<MutedDivider />
				<HeaderContainer matchData={matchData} />
			</FixtureDataInner>
		</FixtureData>
	);
};

const DisplayTeamName = (props) => {
	const {fontFamily, TEAM, STYLE, THEME} = props;
	return (
		<TeamName fontFamily={fontFamily} style={STYLE} THEME={THEME}>
			{restrictString(TEAM, 50)}
		</TeamName>
	);
};

const DisplayGradeName = (props) => {
	const {fontFamily, TEAM, STYLE, THEME} = props;
	return (
		<GradeName fontFamily={fontFamily} style={STYLE} THEME={THEME}>
			{TEAM}
		</GradeName>
	);
};

const DisplayLogo = (props) => {
	const {LOGO, STYLES, borderRadius} = props;

	return (
		<LogoHolder borderRadius={borderRadius}>
			<ImageWithFallback src={{url: LOGO}} style={STYLES} />
		</LogoHolder>
	);
};
