import React from 'react';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {PresentationalAssetType} from '../../../common/components/presentational/AssetType';
import {PresentationalOrganisationName} from '../../../common/components/presentational/OrganisationName';

export const AssetTitle = () => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const {FPS_INTRO} = TIMINGS;

	const styleObjAsset = {
		...Font.Title,
		color: Color.Background.Contrast,
		width: '100%',
		...TextStyles.introTitle,
		margin: '0',
		padding: '0',
		textAlign: 'center',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const animationObjAsset = {
		transform: `translateY(${SpringToFrom(
			3,
			-1000,
			1,
			'Wobbly'
		)}px) translateY(${SpringToFrom(FPS_INTRO - 15, 0, -1000, 'Wobbly')}px)`,
	};

	const styleObjOrganisation = {
		...Font.Title,
		color: Color.Background.Contrast,
		...TextStyles.copyLarge,
		width: '100%',
		margin: '10px 0 0 0',
		padding: '0',
		textAlign: 'center',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const animationObjOrganisation = {
		transform: `translateY(${SpringToFrom(
			0,
			1000,
			1,
			'Wobbly'
		)}px) translateY(${SpringToFrom(FPS_INTRO - 25, 0, 1000, 'Wobbly')}px)`,
	};

	return (
		<>
			<PresentationalAssetType
				styleObj={styleObjAsset}
				animationObj={animationObjAsset}
			/>
			<PresentationalOrganisationName
				styleObj={styleObjOrganisation}
				animationObj={animationObjOrganisation}
			/>
		</>
	);
};
