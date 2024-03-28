import styled from 'styled-components';
import {getDominantColor} from '../../../../../../utils/colors';
import {ImageWithFallback} from '../../../../Components/Common/ImageWithFallback';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {HeaderContainer} from './HeaderContainer';
import {PrincipalBodySponsorVersion2} from '../../../../Components/Intro/PrincipalSponsor';
import {DisplayRoster} from './DisplayRoster';
import {DisplayTeamName} from '../../../../Components/Common/CommonVariables';
import { calculateImageDimensions } from '../../../../../../utils/global/calculateImageDimensions';

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

export const DisplayFixtureData = (props) => {
	const {matchData, TemplateVariation, SectionHeights, StyleConfig} = props;

	return (
		<FixtureData>
			<FixtureDataInner Height={SectionHeights.Body}>
				<DisplayLogos
					matchData={matchData}
					TemplateVariation={TemplateVariation}
				/>
				<DisplayTeamNames matchData={matchData} StyleConfig={StyleConfig} />

				<DisplayRoster {...props} />
				<HeaderContainer {...props} />
			</FixtureDataInner>
			<PrincipalBodySponsorVersion2 {...props} />
		</FixtureData>
	);
};

const DisplayTeamNames = (props) => {
	const {matchData, StyleConfig} = props;
	const {teamAway, teamHome, isHomeTeam} = matchData;
	const {Font, Color} = StyleConfig;

	const TeamNameStyles = {
		...Font.Copy,
		color: Color.Primary.Contrast,
		fontSize: '1.45em',
		lineHeight: '1.1em',
		letterSpacing: '-0.015em',
		width: '100%',
		margin: '15px',

		textTransform: 'uppercase',
		textAlign: 'center',
	};
	return (
		<LogoContainer>
			<DisplayTeamName
				name={isHomeTeam ? teamHome : teamAway}
				customStyles={TeamNameStyles}
			/>

			<DisplayTeamName
				name={isHomeTeam ? teamAway : teamHome}
				customStyles={TeamNameStyles}
			/>
			<DisplayTeamName
				TEAM={isHomeTeam ? teamHome : teamAway}
				STYLE={{
					color: Color.Primary.Contrast,
				}}
			/>
			<DisplayTeamName
				TEAM={isHomeTeam ? teamAway : teamHome}
				STYLE={{
					color: Color.Primary.Contrast,
				}}
			/>
		</LogoContainer>
	);
};

const DisplayLogos = (props) => {
	const {matchData, TemplateVariation} = props;
	const {teamAwayLogo, teamHomeLogo, isHomeTeam} = matchData;
	// Original sizing
	const originalSizing = [60, 60, 60];
	const largerTeamSizing = originalSizing.map((size) => size * 2.2); // Double the size

	const firstTeamLogoStyles = calculateImageDimensions(
		isHomeTeam ? teamHomeLogo : teamAwayLogo,
		largerTeamSizing
	);
	return (
		<LogoContainer>
			<DisplayLogo
				LOGO={isHomeTeam ? teamHomeLogo : teamAwayLogo}
				borderRadius={TemplateVariation.borderRadius}
				STYLES={{
					...firstTeamLogoStyles,
					objectFit: 'cover',
					borderRadius: '100%',
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
				src={LOGO}
				style={STYLES}
			/>
		</LogoHolder>
	);
};
