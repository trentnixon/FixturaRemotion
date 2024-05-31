import styled from 'styled-components';
import {getDominantColor} from '../../../../../../utils/colors';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../../../../utils/copy';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';

import {PrincipalSponsorAlwaysShow} from '../../../../Components/Intro/OLD_PrincipalSponsor';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
 
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
	line-height: 1.2em;
	letter-spacing: -0.015em;
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
	font-size: 1.8em; // Adjust as needed
	font-weight: bold; // Adjust as needed
	margin: 0 10px; // Gives some space on either side of the text
	align-self: center; // Aligns vertically in the center when in a flex row
`;

export const DisplayFixtureData = (props) => {
	const {matchData, TemplateVariation, StyleConfig} = props;
	const {teamHome, teamAway, teamAwayLogo, teamHomeLogo, isHomeTeam} =
		matchData;
	const {Font, Color} = StyleConfig;
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
						TEAM={isHomeTeam ? teamHome : teamAway}
						STYLE={{
							...Font.Copy,
							fontSize: '3em',
							lineHeight: '1.05em',
							color: Color.Primary.BackgroundContractColor,
						}}
					/>
				</TeamContianer>
				<VsText
					style={{
						...Font.Copy,
						color: Color.Primary.BackgroundContractColor,
					}}
				>
					vs
				</VsText>
				{/* Second Team (Smaller Logo) */}
				<TeamContianer style={{flexDirection: 'row', alignItems: 'center'}}>
					<ImageWithFallback
						src={isHomeTeam ? teamAwayLogo : teamHomeLogo}
						style={{
							...Font.Copy,
							margin: 0,
							padding: 0,
							...secondTeamLogoStyles,
							objectFit: 'cover',
						}}
					/>
					<DisplayTeamName
						TEAM={isHomeTeam ? teamAway : teamHome}
						STYLE={{
							...Font.Copy,
							fontSize: '1.5em',
							width: '300px',
							fontWeight: 200,
							padding: '0 10px',
							color: Color.Primary.BackgroundContractColor,
						}}
					/>
				</TeamContianer>
			</FixtureDataInner>
			<PrincipalSponsorAlwaysShow {...props} />
		</FixtureData>
	);
};

const DisplayTeamName = (props) => {
	const {TEAM, STYLE} = props;
	return <TeamName style={{...STYLE}}>{restrictString(TEAM, 50)}</TeamName>;
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
			<ImageWithFallback src={LOGO} style={STYLES} />
		</LogoHolder>
	);
};
