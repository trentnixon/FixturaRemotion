import styled from 'styled-components';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';

const FixtureData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start; /* Distributes space evenly */
	padding: 0px;
	margin: 0px;
	width: 100%;
	height: 1344px; /* Ensures full height */
	position: relative;
`;
const FixtureDataInner = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: strat;
	padding: 50px 0 0 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	height: 1344px;
`;

const TeamContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: flex-end;
	align-content: center;
	min-height: auto;
	padding: 20px 0;
`;

const TeamName = styled.h2`
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	width: 100%;
	padding: 0 5%;
`;

const LogoHolder = styled.div`
	z-index: 1000;
	padding: 0 0 0 15px;
	background-color: ${(props) => props.BGColor};
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: ${(props) => props.borderRadius};
	margin: 10px 0;
`;

const VsText = styled.div`
	margin: 0 10px; // Gives some space on either side of the text
	align-self: center; // Aligns vertically in the center when in a flex row
`;

const SponsorContainer = styled.div`
	padding: 0 0 0 15px;
	background-color: ${(props) => props.BGColor};
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	border-radius: ${(props) => props.borderRadius};
	margin: 10px 0;
`;

export const DisplayFixtureData = (props) => {
	const {matchData} = props;

	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo, isHomeTeam, sponsors} =
		matchData;

	console.log('[sponsors]', sponsors);
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;
	const fontColor =
		TemplateVariation.Background === 'Image'
			? Color.Primary.Contrast
			: Color.Primary.BackgroundContractColor;

	// Original sizing
	const originalSizing = [150, 150, 150];

	// Adjusted sizing
	const largerTeamSizing = originalSizing.map((size) => size * 2.2); // Double the size
	const smallerTeamSizing = originalSizing.map((size) => size * 0.5); // Half the size

	const firstTeamLogoStyles = calculateImageDimensions(
		isHomeTeam ? teamHomeLogo : teamAwayLogo,
		largerTeamSizing
	);
	const secondTeamLogoStyles = calculateImageDimensions(
		isHomeTeam ? teamAwayLogo : teamHomeLogo,
		smallerTeamSizing
	);

	return (
		<FixtureData>
			<FixtureDataInner>
				<TeamContainer>
					<DisplayLogo
						LOGO={isHomeTeam ? teamHomeLogo : teamAwayLogo}
						borderRadius="100%"
						STYLES={{
							...firstTeamLogoStyles,
							borderRadius: '100%',
							objectFit: 'cover',
						}}
					/>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamHome : teamAway}
						STYLE={{
							...Font.Copy,
							...TextStyles.copyLargeBold,
							color: fontColor,
						}}
					/>
				</TeamContainer>
				<VsText
					style={{
						...Font.Copy,
						...TextStyles.copySmall,
						color: fontColor,
					}}
				>
					vs
				</VsText>
				{/* Second Team (Smaller Logo) */}
				<TeamContainer style={{flexDirection: 'column', alignItems: 'center'}}>
					<DisplayLogo
						LOGO={isHomeTeam ? teamAwayLogo : teamHomeLogo}
						borderRadius={TemplateVariation.borderRadius}
						STYLES={{
							...secondTeamLogoStyles,
							borderRadius: '100%',
							objectFit: 'cover',
						}}
					/>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamAway : teamHome}
						STYLE={{
							...Font.Copy,
							...TextStyles.copyMedium,
							width: '300px',

							padding: '0 10px',
							color: fontColor,
						}}
					/>
				</TeamContainer>
				<DisplaySponsor sponsors={sponsors} />
			</FixtureDataInner>
		</FixtureData>
	);
};

const DisplayTeamName = (props) => {
	const {TEAM, STYLE} = props;
	return <TeamName style={{...STYLE}}>{restrictString(TEAM, 50)}</TeamName>;
};

const DisplayLogo = (props) => {
	const {LOGO, STYLES, borderRadius} = props;
	return (
		<LogoHolder
			borderRadius={borderRadius}
			style={{
				left: 0,
				top: 0,
			}}
		>
			<ImageWithFallback src={{url: LOGO}} style={STYLES} />
		</LogoHolder>
	);
};

const DisplaySponsor = (props) => {
	const {sponsors} = props;
	const multiplier = sponsors.length === 1 ? 2 : 1;
	const imgSize = [180 * multiplier, 220 * multiplier, 140 * multiplier];
	return (
		<SponsorContainer>
			{sponsors?.map((sponsor) => {
				return (
					<ImageWithFallback
						src={{url: sponsor.Logo}}
						style={{
							...calculateImageDimensions(sponsor, imgSize),
							borderRadius: '10%',
							objectFit: 'cover',
						}}
					/>
				);
			})}
		</SponsorContainer>
	);
};
