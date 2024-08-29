import styled from 'styled-components';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {HeaderContainer} from './HeaderContainer';
import {DisplayRoster} from './DisplayRoster';

const FixtureData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start; /* Distributes space evenly */
	padding: 0px;
	margin: 270px 0 0 0;
	width: 100%;
	position: relative;
`;
const FixtureDataInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: strat;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
`;

const LogoContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 90%;
	margin: 0 auto;
	justify-content: center;
	align-items: center;
	align-content: center;
	min-height: auto;
`;

const TeamName = styled.h2`
	text-transform: uppercase;
	margin: 15px;
	text-align: center;
	width: 100%;
	padding: 0%;
`;

const LogoHolder = styled.div`
	z-index: 1000;
	padding: 0;
	background-color: ${(props) => props.BGColor};
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${(props) => props.borderRadius};
	margin: 0;
`;

export const DisplayRosterData = (props) => {
	const {matchData} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo, isHomeTeam} =
		matchData;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;

	const {Font, Color} = StyleConfig;

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
				<LogoContainer>
					<DisplayLogo
						LOGO={isHomeTeam ? teamHomeLogo : teamAwayLogo}
						borderRadius={TemplateVariation.borderRadius}
						STYLES={{
							...firstTeamLogoStyles,
							objectFit: 'cover',
						}}
					/>
					<DisplayLogo
						LOGO={isHomeTeam ? teamAwayLogo : teamHomeLogo}
						borderRadius={TemplateVariation.borderRadius}
						STYLES={{
							...firstTeamLogoStyles,
							objectFit: 'cover',
							borderRadius: '100%',
						}}
					/>
				</LogoContainer>
				<LogoContainer>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamHome : teamAway}
						STYLE={{
							...Font.Copy,
							...TextStyles.copyMedium,
							color: Color.Primary.Contrast,
						}}
					/>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamAway : teamHome}
						STYLE={{
							...Font.Copy,
							...TextStyles.copyMedium,
							color: Color.Primary.Contrast,
						}}
					/>
				</LogoContainer>
				<DisplayRoster {...props} matchData={matchData} />
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

const DisplayLogo = (props) => {
	const {LOGO, STYLES, borderRadius} = props;

	return (
		<LogoHolder borderRadius={borderRadius}>
			<ImageWithFallback src={{url: LOGO}} style={STYLES} />
		</LogoHolder>
	);
};
