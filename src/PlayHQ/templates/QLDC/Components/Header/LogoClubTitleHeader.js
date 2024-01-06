import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

//import {HeaderLogo, SingleResultHeaderLogo} from './Logo';
import {AssetCategoryLabel, DisplayVideoTitleTop} from './HeaderTitles';

import {getContrastColor} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {EraseToMiddleFromTop, FromLeftToRight, FromMiddle} from '../../../../Animation/ClipWipe';

// LogoClubTitleHeaderVersion2 Component
// This component renders the header for a club title, including the organisation name and video title.
// It dynamically generates styles based on the given THEME, VIDEOMETA, and FPS_MAIN props.

export const LogoClubTitleHeaderVersion2 = ({THEME, Labels, FPS_MAIN,SectionHeights}) => {
	if (!THEME || !Labels || !FPS_MAIN) {
		// Handle error or return null
		// TODO: handle Remotion error!!
	}

	const frame = useCurrentFrame();

	// Adapt the In Out Animations for the text
	const InAnimation = (INT)=>{
		return FromLeftToRight(INT, 'Wobbly')
	}
	const OutAnimation = (INT)=>{
		return interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0)
	}

	// Customizable Style Properties
	// These properties are set at the top for easy customization.
	// They are used in the AssetTitleOBJ to dynamically style the components.
	const TextAlign = 'right';
	const fontFamily = 'Roboto Condensed';
	const BigFontWeight = '900';
	const BigFontSize = '6.5em';
	const SmallFontWeight = '300';
	const Color = getContrastColor(THEME.secondary); 
	const TitlePositionOnVideo = 'flex-end';
	
	// end customise

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
			// generics
			fontFamily: fontFamily,
			// in out
			//opacity: interpolateOpacityByFrame(frame, 0, 15, 0, 1),
			clipPath: InAnimation(5),
			opacity: OutAnimation(),
			// Customise
			color: Color, // This will use THEME.primary color
			textAlign: TextAlign,
			fontWeight: SmallFontWeight,
			letterSpacing: '0.02em',
			textTransform: 'uppercase',
		},
		AssetTitle: {
			// generics
			fontFamily: fontFamily,
			// in out
			clipPath:  InAnimation(10),
			opacity: OutAnimation(),
			// Customise
			color: Color,
			margin: '0',
			fontSize: BigFontSize,
			lineHeight: '0.9em',
			fontWeight: BigFontWeight,
			textAlign: TextAlign,
		},
	};

	return (
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