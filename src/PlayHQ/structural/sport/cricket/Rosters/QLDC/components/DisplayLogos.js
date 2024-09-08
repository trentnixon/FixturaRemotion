import styled from 'styled-components';
import {getDominantColor} from '../../../../../../utils/colors';
import {ImageWithFallback} from '../../../../../../utils/global/ImageWithFallback';
import {useEffect, useState} from 'react';
import {continueRender, delayRender} from 'remotion';
import {calculateImageDimensions} from '../../../../../../utils/global/calculateImageDimensions';
import {useStylesContext} from '../../../../../../context/StyleContext';

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

export const DisplayLogos = ({matchData}) => {
	const {teamAwayLogo, teamHomeLogo, isHomeTeam} = matchData;
	console.log('[matchData]', matchData);
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;

	// Original sizing
	const originalSizing = [150, 150, 150];
	const firstTeamLogoStyles = calculateImageDimensions(
		isHomeTeam ? teamHomeLogo : teamAwayLogo,
		originalSizing
	);
	return (
		<LogoContainer>
			<DisplayLogo
				LOGO={{url: isHomeTeam ? teamHomeLogo : teamAwayLogo}}
				borderRadius={TemplateVariation.borderRadius}
				STYLES={{
					...firstTeamLogoStyles,
					objectFit: 'cover',
					borderRadius: '100%',
				}}
			/>
			<DisplayLogo
				LOGO={{url: isHomeTeam ? teamAwayLogo : teamHomeLogo}}
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
			<ImageWithFallback src={LOGO} style={STYLES} />
		</LogoHolder>
	);
};
