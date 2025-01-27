import React from 'react';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {PresentationalAssetType} from '../../../common/components/presentational/AssetType';
import {PresentationalOrganisationName} from '../../../common/components/presentational/OrganisationName';
import {AccountLogo} from './AccountLogo';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import {FromLeftToRight, FromRightToLeft} from '../../../Animation/ClipWipe';
import styled from 'styled-components';

export const AssetTitle = () => {
	const frame = useCurrentFrame();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const {FPS_INTRO} = TIMINGS;

	const styleObjAsset = {
		...Font.Title,
		...TextStyles.introTitle,
		color: 'black',
		width: '100%',
		margin: '0',
		padding: '0',
		textAlign: 'left',
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
		...TextStyles.introCopy,
		color: 'black',
		width: '100%',
		margin: '10px 0 0 0',
		padding: '0',

		textAlign: 'left',
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
			<AccountLogo />
			<StackContainer>
				<PresentationalOrganisationName
					styleObj={styleObjOrganisation}
					animationObj={animationObjOrganisation}
				/>
				<PresentationalAssetType
					styleObj={styleObjAsset}
					animationObj={animationObjAsset}
				/>
			</StackContainer>
		</>
	);
};

const StackContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
