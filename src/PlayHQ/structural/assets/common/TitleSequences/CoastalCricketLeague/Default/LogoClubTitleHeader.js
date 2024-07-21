import React from 'react';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {
	FromLeftToRight,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {BundleCategoryName} from '../../../../../../common/components/presentational/BundleCategory';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

export const CCLAssetTitle = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS, Heights} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	const {FPS_MAIN} = TIMINGS;

	// Adapt the In Out Animations for the text
	const InAnimation = (INT) => {
		return FromLeftToRight(INT, 'Wobbly');
	};
	const OutAnimation = () => {
		return interpolateOpacityByFrame(frame, FPS_MAIN - 30, FPS_MAIN, 1, 0);
	};

	console.log(Color.Background);

	// Customizable Style Properties
	const TextAlign = 'left';
	const fontFamily = Font.Label;
	const BigFontWeight = '900';
	const BigFontSize = '4em';
	const SmallFontWeight = '300';
	const SmallFontSize = '2em';
	const FontColor = Color.Background.Contrast;
	const TitlePositionOnVideo = 'flex-start';

	// AssetTitleOBJ
	const AssetTitleOBJ = {
		AssetTitleContainer: {
			padding: '10px',
			margin: '0',
			flexDirection: 'column',
			width: '100%',
			alignItems: TitlePositionOnVideo,
			justifyContent: 'flex-start',
			height: `${Heights.Header}px`,
		},
		AssetContainerInner: {
			flex: '1',
			itemPadding: '5px',
			itemMargin: '2px',
		},
		CategoryLabel: {
			fontFamily,
			clipPath: InAnimation(5),
			opacity: OutAnimation(),
			color: FontColor,
			textAlign: TextAlign,
			fontWeight: SmallFontWeight,
			letterSpacing: '0.06em',
			textTransform: 'uppercase',
			fontSize: SmallFontSize,
		},
		AssetTitle: {
			fontFamily,
			clipPath: InAnimation(10),
			opacity: OutAnimation(),
			color: FontColor,
			margin: '0',
			fontSize: BigFontSize,
			lineHeight: '0.9em',
			fontWeight: BigFontWeight,
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
					style={{
						clipPath: FromTopToBottom(0, 'Slow'),
					}}
				>
					<path d="M0 0H1081.5V88L0 165V0Z" fill={Color.Background.Color} />
				</svg>
			</HeaderContainer>
			<AssetTitleContainer {...AssetTitleOBJ.AssetTitleContainer}>
				<AssetTitleItem {...AssetTitleOBJ.AssetContainerInner}>
					<BundleCategoryName styleObj={AssetTitleOBJ.CategoryLabel} />
					<PresentationalAssetType styleObj={AssetTitleOBJ.AssetTitle} />
				</AssetTitleItem>
			</AssetTitleContainer>
		</>
	);
};

// STYLED COMPONENTS
const AssetTitleContainer = styled.div`
	display: flex;
	flex-direction: ${({flexDirection}) => flexDirection};
	align-items: ${({alignItems}) => alignItems};
	justify-content: ${({justifyContent}) => justifyContent};
	width: ${({width}) => width};
	height: ${({height}) => height};
	position: relative;
	z-index: 1000;
	padding: ${({padding}) => padding};
	margin: ${({margin}) => margin};
	background: ${({backgroundColor}) => backgroundColor};
`;

const AssetTitleItem = styled.div`
	flex: ${({flex}) => flex};
	padding: ${({itemPadding}) => itemPadding};
	margin: ${({itemMargin}) => itemMargin};
`;

const HeaderContainer = styled.div`
	width: 100%;
	overflow: hidden;
	position: absolute;
	top: 0;
	left: 0;
`;
