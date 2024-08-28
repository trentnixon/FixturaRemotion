import {useCurrentFrame} from 'remotion';
import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {FromLeftToRight} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {BundleCategoryName} from '../../../../../../common/components/presentational/BundleCategory';
import {PresentationalAssetType} from '../../../../../../common/components/presentational/AssetType';
import styled from 'styled-components';

// LogoClubTitleHeaderVersion2 Component
export const QLDCricketRosterTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Heights} = useLayoutContext();
	const {Font, Color} = StyleConfig;

	// Customizable Style Properties
	const TextAlign = 'right';
	const fontFamily = Font.Label;
	const FontColor = Color.Background.Contrast;
	const TitlePositionOnVideo = 'flex-end';

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
			...TextStyles.assetSubtitle,
			fontFamily,
			color: FontColor,
			textAlign: TextAlign,
			textTransform: 'uppercase',
		},
		AssetTitle: {
			...TextStyles.assetTitle,
			fontFamily,
			color: FontColor,
			margin: '0',
			textAlign: TextAlign,
		},
	};

	return (
		<AssetTitleContainer {...AssetTitleOBJ}>
			<AssetTitleItem {...AssetTitleOBJ}>
				<BundleCategoryName styleObj={AssetTitleOBJ.CategoryLabel} />
				<PresentationalAssetType styleObj={AssetTitleOBJ.AssetTitle} />
			</AssetTitleItem>
		</AssetTitleContainer>
	);
};

// STYLED COMPONENTS
const AssetTitleContainer = styled.div`
	display: flex;
	flex-direction: ${({AssetTitleContainer}) =>
		AssetTitleContainer.flexDirection};
	align-items: ${({AssetTitleContainer}) => AssetTitleContainer.alignItems};
	justify-content: ${({AssetTitleContainer}) =>
		AssetTitleContainer.justifyContent};
	width: ${({AssetTitleContainer}) => AssetTitleContainer.width};
	height: ${({AssetTitleContainer}) => AssetTitleContainer.height};
	position: relative;
	z-index: 1000;
	padding: ${({AssetTitleContainer}) => AssetTitleContainer.padding};
	margin: ${({AssetTitleContainer}) => AssetTitleContainer.margin};
	background: ${({AssetTitleContainer}) => AssetTitleContainer.backgroundColor};
`;

const AssetTitleItem = styled.div`
	flex: ${({AssetContainerInner}) => AssetContainerInner.flex};
	padding: ${({AssetContainerInner}) => AssetContainerInner.itemPadding};
	margin: ${({AssetContainerInner}) => AssetContainerInner.itemMargin};
`;
