import styled from 'styled-components';
import {
	getContrastColor,
	GetBackgroundContractColorForText,
	getDominantColor,
} from '../../../../../utils/colors';

import {ImageWithFallback} from '../../../Components/Common/ImageWithFallback';
import {restrictString} from '../../../../../utils/copy';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {calculateImageDimensions} from '../../../../../utils/global/calculateImageDimensions';
const FixtureData = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	margin: 0;
	width: 40%;
	flex-direction: column;
	position: relative;
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
	font-weight: 800;
	font-size: 2.5em;
	line-height: 1em;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	margin: 0;
	text-align: center;
	font-family: ${(props) => props.fontFamily};
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
	border: 2px solid rgba(255, 255, 255, 0.1);
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(25px);
	margin-bottom: 10px;
	padding: 5px;
`;

const LogoHolder = styled.div`
	z-index: 1000;
	padding: 0 0 0 15px;

	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 10px 0;
`;

export const DisplayFixtureData = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, TemplateVariation} =
		props;
	const {teamHome, teamAway, gradeName, teamAwayLogo, teamHomeLogo, date} =
		matchData;

	//console.log(props);

	const IMGSIZING = [200, 220, 200];
	const teamHomeLogoStyles = calculateImageDimensions(teamHomeLogo, IMGSIZING);
	const teamAwayLogoStyles = calculateImageDimensions(teamAwayLogo, IMGSIZING);
	return (
		<FixtureData>
			<TeamContianer>
				<DisplayLogo
					LOGO={teamHomeLogo}
					borderRadius={TemplateVariation.borderRadius}
					STYLES={{
						...teamHomeLogoStyles,
						objectFit: 'cover',
					}}
				/>
				<DisplayTeamName
					THEME={THEME}
					TEAM={teamHome}
					fontFamily={fontFamily}
					STYLE={{
						color: GetBackgroundContractColorForText(
							props.THEME.primary,
							props.THEME.secondary
						),
					}}
				/>
			</TeamContianer>
			<TeamScore
				fontFamily={fontFamily}
				color={getContrastColor(THEME.primary)}
				THEME={THEME}
				borderRadius={TemplateVariation.borderRadius}
				style={{
					color: getContrastColor(THEME.primary),
				}}
			>
				vs
			</TeamScore>

			<TeamContianer>
				<DisplayTeamName
					THEME={THEME}
					TEAM={teamAway}
					fontFamily={fontFamily}
					STYLE={{
						color: GetBackgroundContractColorForText(
							props.THEME.primary,
							props.THEME.secondary
						),
					}}
				/>
				<DisplayLogo
					borderRadius={TemplateVariation.borderRadius}
					LOGO={teamAwayLogo}
					STYLES={{
						...teamAwayLogoStyles,
						objectFit: 'cover',
					}}
				/>
			</TeamContianer>
			<TeamScore
				fontFamily={fontFamily}
				color={getContrastColor(THEME.primary)}
				THEME={THEME}
				borderRadius={TemplateVariation.borderRadius}
				style={{
					color: getContrastColor(THEME.primary),
				}}
			>
				{date}
			</TeamScore>
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
			BGColor={BGColor}
			style={{
				left: 0,
				top: 0,
			}}
		>
			<ImageWithFallback
				src={LOGO}
				style={STYLES}
			/>
		</LogoHolder>
	);
};
