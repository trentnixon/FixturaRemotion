import React from 'react';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {PresentationalAssetType} from '../../../common/components/presentational/AssetType';
import {PresentationalOrganisationName} from '../../../common/components/presentational/OrganisationName';
import {AccountLogo} from './AccountLogo';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import { FromLeftToRight, FromRightToLeft, FromTopToBottom } from '../../../Animation/ClipWipe';
import { getFontSizing } from '../../../utils/copy';

export const AssetTitle = () => {
	const frame = useCurrentFrame();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const {FPS_INTRO} = TIMINGS;

	const styleObjAsset = {
		...Font.Title,
		color: 'black',
		width: '100%',
		fontWeight: '100',
		fontSize: getFontSizing(StyleConfig).Title.L,
		margin: '0',
		padding: '0',
		lineHeight: 'auto',
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const animationObjAsset = {
		opacity: interpolateOpacityByFrame(frame, 0, 30, 0, 1),
		clipPath: FromRightToLeft(7, 'Wobbly'),
		transform: `translateX(${SpringToFrom(
			3,
			-1000,
			1,
			'Wobbly'
		)}px) translateX(${SpringToFrom(FPS_INTRO - 25, 0, 1000, 'Wobbly')}px)`,
	};

	const styleObjOrganisation = {
		...Font.Title,
		color: 'black',
		width: '100%',
		fontWeight: '100',
		fontSize: '2em',
		margin: '10px 0 0 0',
		padding: '0',
		lineHeight: 'auto',
		textAlign: 'center',
		letterSpacing: '0em',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const animationObjOrganisation = {
		opacity: interpolateOpacityByFrame(frame, 0, 30, 0, 1),
		clipPath: FromLeftToRight(7, 'Wobbly'),
		transform: `translateX(${SpringToFrom(
			0,
			1000,
			1,
			'Wobbly'
		)}px) translateX(${SpringToFrom(FPS_INTRO - 25, 0, -1000, 'Wobbly')}px)`,
	};

	return (
		<>
			<PresentationalOrganisationName
				styleObj={styleObjOrganisation}
				animationObj={animationObjOrganisation}
			/>
			<AccountLogo />
			<PresentationalAssetType
				styleObj={styleObjAsset}
				animationObj={animationObjAsset}
			/>
		</>
	);
};
