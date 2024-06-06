import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {AssetCategoryLabel, DisplayVideoTitleTop} from './HeaderTitles';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {FromLeftToRight, FromTopToBottom} from '../../../../Animation/ClipWipe';

// LogoClubTitleHeaderVersion2 Component
// This component renders the header for a club title, including the organisation name and video title.
// It dynamically generates styles based on the given StyleConfig, VIDEOMETA, and FPS_MAIN props.

export const LogoClubTitleHeaderVersion2 = (props) => {
	const {Labels, FPS_MAIN, SectionHeights, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	if (!Labels || !FPS_MAIN) {
		// Handle error or return null
		// TODO: handle Remotion error!!
	}

	const frame = useCurrentFrame();

	// Adapt the In Out Animations for the text
	const InAnimation = (INT) => {
		return FromLeftToRight(INT, 'Wobbly');
	};
	const OutAnimation = (INT) => {
		return interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0);
	};

	// Customizable Style Properties
	// These properties are set at the top for easy customization.
	// They are used in the AssetTitleOBJ to dynamically style the components.
	const TextAlign = 'left';
	const fontFamily = Font.Label;
	const BigFontWeight = '900';
	const BigFontSize = '4em';
	const SmallFontWeight = '300';
	const SmallFontSize = '2em';
	const FontColor = 'white';
	const TitlePositionOnVideo = 'flex-start';

	// End customise

	// AssetTitleOBJ
	// This object centralizes the styling information for the title components.
	// It contains sub-objects for each styled component: AssetTitleContainer, AssetContainerInner, CategoryLabel, and AssetTitle.
	// Each sub-object provides specific style properties for its corresponding component.

	const AssetTitleOBJ = {
		AssetTitleContainer: {
			padding: '10px',
			margin: '0',
			flexDirection: 'column',
			width: '100%',
			alignItems: TitlePositionOnVideo,
			justifyContent: 'flex-start',
			height: `${SectionHeights.Header}px`,
		},
		AssetContainerInner: {
			flex: '1',
			itemPadding: '5px',
			itemMargin: '2px',
		},
		CategoryLabel: {
			// Generics
			fontFamily,
			// In out

			clipPath: InAnimation(5),
			opacity: OutAnimation(),
			// Customise
			color: FontColor,
			textAlign: TextAlign,
			fontWeight: SmallFontWeight,
			letterSpacing: '0.06em',
			textTransform: 'uppercase',
			fontSize:SmallFontSize,
		},
		AssetTitle: {
			// Generics
			fontFamily,
			// In Out
			clipPath: InAnimation(10),
			opacity: OutAnimation(),
			// Customise
			color: FontColor,
			margin: '0',
			fontSize: BigFontSize,
			lineHeight: '0.9em',
			fontWeight: SmallFontWeight,
			textAlign: TextAlign,
			letterSpacing: '0.05em',
		},
	};

	return (
		<>
		<HeaderContainer>
				<svg
					width="1080"
					height="170"
					viewBox="0 0 1080 170"
					fill="none"
					xmlns="http://www.w3.org/2000/svg" 
					style={{
						clipPath: FromTopToBottom(0, 'Slow'),
					}} 
				>
					<path d="M0 0H1081.5V88L0 165V0Z" fill={Color.Secondary.Darken} />
				</svg>
			</HeaderContainer>
			<AssetTitleContainer {...AssetTitleOBJ}>
				<AssetTitleItem {...AssetTitleOBJ}>
					<AssetCategoryLabel
						grouping_category={Labels.small}
						titleStyles={AssetTitleOBJ.CategoryLabel}
					/> 
					<DisplayVideoTitleTop
						AssetTitleStyles={AssetTitleOBJ.AssetTitle}
						VALUE={Labels.large}
					/>
				</AssetTitleItem>
			</AssetTitleContainer>
			
		</>
	);
};

// STYLED COMPONENTS
// AssetTitleContainer Component
// This is a styled div that serves as the main container for the asset title.
// It uses flexbox to align and justify its children elements.
// The style properties are dynamically set based on the AssetTitleContainer object within AssetTitleOBJ.

const AssetTitleContainer = styled.div`
	display: flex;
	flex-direction: ${({AssetTitleContainer}) =>
		AssetTitleContainer.flexDirection};
	align-items: ${({AssetTitleContainer}) => AssetTitleContainer.alignItems};
	justify-content: ${({AssetTitleContainer}) =>
		AssetTitleContainer.justifyContent};
	width: ${({AssetTitleContainer}) => AssetTitleContainer.width};
	height: ${({AssetTitleContainer}) => AssetTitleContainer.height};
	position: 'relative';
	z-index: '1000';
	padding: ${({AssetTitleContainer}) => AssetTitleContainer.padding};
	margin: ${({AssetTitleContainer}) => AssetTitleContainer.margin};
	background: ${({AssetTitleContainer}) => AssetTitleContainer.backgroundColor};
`;
// AssetTitleItem Component
// This is a styled div that represents an individual item within the AssetTitleContainer.
// It uses flex properties for layout control, and its style is set by the AssetContainerInner object in AssetTitleOBJ.

const AssetTitleItem = styled.div`
	flex: ${({AssetContainerInner}) => AssetContainerInner.flex};
	padding: ${({AssetContainerInner}) => AssetContainerInner.itemPadding};
	margin: ${({AssetContainerInner}) => AssetContainerInner.itemMargin};
`;

export const HeaderShape = styled.div`
	width: 100%;
	height: 100px; /* Adjust the height as needed */
	background-color: #298da7; /* Adjust the background color to match your design */
	position: relative;

	&::before {
		content: '';
		position: absolute;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: #298da7; /* Adjust the color to match your design */
		transform: skewY(-3deg); /* Adjust the skew angle to match your design */
		transform-origin: bottom left;
	}
`;

const HeaderContainer = styled.div`
	width: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
`;
