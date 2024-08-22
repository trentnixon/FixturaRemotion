import React from 'react';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {PresentationalAssetType} from '../../../common/components/presentational/AssetType';
import {PresentationalOrganisationName} from '../../../common/components/presentational/OrganisationName';

export const AssetTitle = () => {
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const {FPS_INTRO} = TIMINGS;

	const styleObjAsset = {
		...Font.Title,
		color: Color.Background.Contrast,
		width: '100%',
		fontWeight: '400',
		fontSize: '10em',
		margin: '0',
		padding: '0',
		lineHeight: '0.8em',
		textAlign: 'center',
		letterSpacing: '-0.02em',
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
		width: '100%',
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
