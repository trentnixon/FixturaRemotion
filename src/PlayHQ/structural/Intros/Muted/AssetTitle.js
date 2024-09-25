import styled from 'styled-components';
import React from 'react';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {PresentationalAssetType} from '../../../common/components/presentational/AssetType';
import {PresentationalOrganisationName} from '../../../common/components/presentational/OrganisationName';
import {AccountLogo} from './AccountLogo';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import {FromLeftToRight} from '../../../Animation/ClipWipe';

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
		width: '555px',
		margin: '0',
		padding: '0',
		textAlign: 'left',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const animationObjAsset = {
		transform: `translateX(${SpringToFrom(
			3,
			-1000,
			1,
			'Wobbly'
		)}px) translateX(${SpringToFrom(FPS_INTRO - 25, 0, -1000, 'Wobbly')}px)`,
	};

	const styleObjOrganisation = {
		...Font.Title,
		...TextStyles.introCopy,
		color: 'black',
		width: '555px',
		margin: '10px 0 0 0',
		padding: '0',
		textAlign: 'left',
		textTransform: 'uppercase',
		zIndex: '2000',
	};

	const animationObjOrganisation = {
		opacity: interpolateOpacityByFrame(frame, 0, 30, 0, 1),
		// clipPath: FromLeftToRight(7, 'Wobbly'),
		transform: `translateX(${SpringToFrom(
			0,
			-1000,
			1,
			'Wobbly'
		)}px) translateX(${SpringToFrom(FPS_INTRO - 25, 0, -1000, 'Wobbly')}px)`,
	};

	return (
		<>
			<OverflowHiddenWrapper>
				<AccountLogo />
			</OverflowHiddenWrapper>
			<div
				style={{
					height: '5px',
					width: '400px',
					backgroundColor: 'black',
					margin: '25px 0',
					clipPath: FromLeftToRight(7, 'Wobbly'),
					transform: `translateX(${SpringToFrom(
						FPS_INTRO - 25,
						0,
						-1000,
						'Wobbly'
					)}px)`,
				}}
			/>

			<OverflowHiddenWrapper>
				<PresentationalAssetType
					styleObj={styleObjAsset}
					animationObj={animationObjAsset}
				/>
			</OverflowHiddenWrapper>
			<OverflowHiddenWrapper>
				<PresentationalOrganisationName
					styleObj={styleObjOrganisation}
					animationObj={animationObjOrganisation}
				/>
			</OverflowHiddenWrapper>
		</>
	);
};
const OverflowHiddenWrapper = styled.div`
	overflow: hidden;
`;
