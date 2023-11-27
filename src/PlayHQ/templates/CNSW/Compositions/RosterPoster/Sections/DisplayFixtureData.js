import styled from 'styled-components';
import {
	getContrastColor,
	GetBackgroundContractColorForText,
	darkenColor,
	lightenColor,
	setOpacity,
	getDominantColor,
} from '../../../../../utils/colors';

import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import useImageDimensions from '../../../../../hooks/useImageDimensions';
import {restrictString} from '../../../../../utils/copy';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {HeaderContainer} from './HeaderContainer';
import { PrincipalSponsorAlwaysShow } from '../../../Components/Intro/PrincipalSponsor';

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
	justify-content: center;
	align-items: strat;
	padding: 0px;
	width: 100%;
	flex-direction: column;
	position: relative;
	height: 1344px;
`;

const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: 200px;
	margin-left: 5%;
	margin-right: 5%;

	background-color: ${(props) => darkenColor(props.THEME.secondary)};
	border-radius: ${(props) => props.borderRadius};
`;

const TeamContianer = styled.div`
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
	font-style: normal;
	font-weight: 900;
	font-size: 2em;
	line-height: 1.2em;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
	width: 100%;
	padding: 0 5%;
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
	font-family: ${(props) => props.fontFamily};
	font-size: 1.8em; // Adjust as needed
	font-weight: bold; // Adjust as needed
	margin: 0 10px; // Gives some space on either side of the text
	align-self: center; // Aligns vertically in the center when in a flex row
	color: ${(props) => props.THEME.secondary}; // Or any color you prefer
`;

export const DisplayFixtureData = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo, date, isHomeTeam} =
		matchData;

	// Original sizing
	const originalSizing = [150, 150, 150];

	// Adjusted sizing
	const largerTeamSizing = originalSizing.map((size) => size * 2.2); // Double the size
	const smallerTeamSizing = originalSizing.map((size) => size * 0.5); // Half the size

	const firstTeamLogoStyles = useImageDimensions(
		isHomeTeam ? teamHomeLogo : teamAwayLogo,
		largerTeamSizing
	);
	const secondTeamLogoStyles = useImageDimensions(
		isHomeTeam ? teamAwayLogo : teamHomeLogo,
		smallerTeamSizing
	);

	return (
		<FixtureData>
			
			<FixtureDataInner>
				{/* First Team (Larger Logo) */}
				<TeamContianer>
					<DisplayLogo
						LOGO={isHomeTeam ? teamHomeLogo : teamAwayLogo}
						borderRadius={TemplateVariation.borderRadius}
						STYLES={{
							...firstTeamLogoStyles,
							objectFit: 'cover',
						}}
					/>
					<DisplayTeamName
						THEME={THEME}
						TEAM={isHomeTeam ? teamHome : teamAway}
						fontFamily={fontFamily}
						STYLE={{
							fontSize: '3em',
							lineHeight: '1.05em',
							color: GetBackgroundContractColorForText(
								THEME.primary,
								THEME.secondary
							),
						}}
					/>
				</TeamContianer>
				<VsText THEME={THEME} fontFamily={fontFamily}>
					vs
				</VsText>
				{/* Second Team (Smaller Logo) */}
				<TeamContianer style={{flexDirection: 'row', alignItems: 'center'}}>
					<ImageWithFallback
						fallbackSrc="https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png" // Replace with your fallback image URL
						src={isHomeTeam ? teamAwayLogo : teamHomeLogo}
						style={{
							margin: 0,
							padding: 0,
							...secondTeamLogoStyles,
							objectFit: 'cover',
						}}
					/>
					<DisplayTeamName
						THEME={THEME}
						TEAM={isHomeTeam ? teamAway : teamHome}
						fontFamily={fontFamily}
						STYLE={{
							fontSize: '1.5em',
							width: '300px',
							fontWeight: 200,
							padding: '0 10px',
							color: GetBackgroundContractColorForText(
								THEME.primary,
								THEME.secondary
							),
						}}
					/>
				</TeamContianer>
			</FixtureDataInner>
			<PrincipalSponsorAlwaysShow {...props} /> 
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
		<LogoHolder
			borderRadius={borderRadius}
			style={{
				left: 0,
				top: 0,
			}}
		>
			<ImageWithFallback
				fallbackSrc="https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png" // Replace with your fallback image URL
				src={LOGO}
				style={STYLES}
			/>
		</LogoHolder>
	);
};

/* <TeamScore
					fontFamily={fontFamily}
					color={getContrastColor(THEME.primary)}
					THEME={THEME}
					borderRadius={TemplateVariation.borderRadius}
					style={{
						color: getContrastColor(THEME.primary),
					}}
				>
					vs
				</TeamScore> */
