import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	setOpacity,
	getDominantColor,
} from '../../../../../utils/colors';

import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {restrictString} from '../../../../../utils/copy';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {HeaderContainer} from './HeaderContainer';
import {PrincipalBodySponsorVersion2} from '../../../Components/Intro/PrincipalSponsor';
import {DisplayRoster} from './DisplayRoster';

const FixtureData = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start; /* Distributes space evenly */
	padding: 0px;
	margin: 0px 0 0 0;
	width: 100%;
	position: relative;
	
`;
const FixtureDataInner = styled.div`
	display: flex;
	justify-content: center;
	align-items: start;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	height: ${(props) => props.Height}px;
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
	font-style: normal;
	font-weight: 400;
	font-size: 1.4em;
	line-height: 1.1em;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	margin: 15px;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
	width: 100%;
	padding: 0%;
`;

const TeamScore = styled.h3`
	font-size: 1.5em;
	line-height: 1.2em;
	font-weight: 400;
	text-align: center;
	margin: 0;
	padding: 0;
	width: 100%;
	letter-spacing: 0.05em;
	text-transform: uppercase;

	padding: 10px 0;
	font-family: ${(props) => props.fontFamily};
	background-color: ${(props) =>
		setOpacity(darkenColor(props.THEME.primary), 0.7)};
	border-radius: ${(props) => props.borderRadius};
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

const VsText = styled.div`
	font-family: ${(props) => props.fontFamily};
	font-size: 1.8em; // Adjust as needed
	font-weight: bold; // Adjust as needed
	margin: 0 10px; // Gives some space on either side of the text
	align-self: center; // Aligns vertically in the center when in a flex row
	color: ${(props) => props.THEME.secondary}; // Or any color you prefer
`;

export const DisplayFixtureData = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation,SectionHeights} =
		props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo, date, isHomeTeam} =
		matchData; 
		
	// Original sizing
	const originalSizing = [60, 60, 60];

	// Adjusted sizing
	const largerTeamSizing = originalSizing.map((size) => size * 2.2); // Double the size

	const firstTeamLogoStyles = useImageDimensions(
		isHomeTeam ? teamHomeLogo : teamAwayLogo,
		largerTeamSizing
	);

	return (
		<FixtureData  >
			<FixtureDataInner Height={SectionHeights.Body}>
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
						THEME={THEME}
						TEAM={isHomeTeam ? teamHome : teamAway}
						fontFamily={fontFamily}
						STYLE={{
							color: getContrastColor(THEME.primary),
						}}
					/>
					<DisplayTeamName
						THEME={THEME}
						TEAM={isHomeTeam ? teamAway : teamHome}
						fontFamily={fontFamily}
						STYLE={{
							color: getContrastColor(THEME.primary),
						}}
					/>
				</LogoContainer>
				<DisplayRoster {...props} />
				<HeaderContainer {...props} />
			</FixtureDataInner>
			{/* <PrincipalSponsorAlwaysShow {...props} /> */}
			<PrincipalBodySponsorVersion2 {...props} />
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

	const [BGColor, setBGColor] = useState(null);
	const [handle] = useState(() => delayRender());

	useEffect(() => {
		// Define an async function
		const fetchColor = async () => {
			try {
				const color = await getDominantColor(LOGO);
				setBGColor(color);
				continueRender(handle);
			} catch (error) {
				console.error('Failed to get dominant color:', error);
				continueRender(handle);
			}
		};

		// Call the async function
		fetchColor();

		// Return a cleanup function to be called if the component is unmounted
		return () => {};
	}, [LOGO]); // Include delay in the dependency array to prevent warning about exhaustive dependencies

	return (
		<LogoHolder borderRadius={borderRadius}>
			<ImageWithFallback
				fallbackSrc="https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png" // Replace with your fallback image URL
				src={LOGO}
				style={STYLES}
			/>
		</LogoHolder>
	);
};
