import React from 'react';
import styled from 'styled-components';
import {getContrastColor} from '../../../utils/colors';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {PresentationalAssetType} from '../../../common/components/presentational/AssetType';
import {PresentationalOrganisationName} from '../../../common/components/presentational/OrganisationName';

const AssetTitleContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const AssetTitle = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const {FPS_INTRO} = TIMINGS;

	const assetTypeStyleObj = {
		...Font.Title,
		color: getContrastColor('#ECECEC'),
		width: '100%',
		fontWeight: '900',
		fontSize: '7em',
		margin: '0',
		padding: '0',
		lineHeight: '0.8em',
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const assetTypeAnimationObj = {
		transform: `translateY(${SpringToFrom(
			3,
			-1000,
			1,
			'Wobbly'
		)}px) translateY(${SpringToFrom(FPS_INTRO - 35, 0, 1000, 'Slow')}px)`,
	};

	const organisationNameStyleObj = {
		...Font.TitleAlt,
		width: '80%',
		color: getContrastColor('#ECECEC'),
		fontWeight: '400',
		fontSize: '2em',
		margin: '10px 0 0 0',
		padding: '0',
		lineHeight: '1em',
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const organisationNameAnimationObj = {
		transform: `translateY(${SpringToFrom(
			0,
			1000,
			1,
			'Wobbly'
		)}px) translateY(${SpringToFrom(FPS_INTRO - 37, 0, 1000, 'Slow')}px)`,
	};

	return (
		<AssetTitleContainer>
			<PresentationalAssetType
				styleObj={assetTypeStyleObj}
				animationObj={assetTypeAnimationObj}
			/>
			<PresentationalOrganisationName
				styleObj={organisationNameStyleObj}
				animationObj={organisationNameAnimationObj}
			/>
		</AssetTitleContainer>
	);
};
