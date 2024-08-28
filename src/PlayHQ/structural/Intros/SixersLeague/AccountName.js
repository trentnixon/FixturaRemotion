import React from 'react';
import styled from 'styled-components';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {BundleCategoryName} from '../../../common/components/presentational/BundleCategory';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';

const ClubNameContainer = styled.div`
	width: auto;
	z-index: 2000;
	width: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const getDynamicFontSize = (text) => {
	if (text?.length <= 10) return '5em'; // Short strings
	if (text?.length <= 20) return '3em'; // Medium strings
	return '2.5em'; // Long strings
};

export const AccountName = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font, Color} = StyleConfig;
	const {grouping_category} = DATA.VIDEOMETA;
	const {FPS_INTRO} = TIMINGS;

	const styleObj = {
		...Font.Title,
		fontSize: getDynamicFontSize(grouping_category),
		color: Color.Background.Contrast,
		fontWeight: 900,
		margin: 0,
		padding: 0,
		lineHeight: 0.9,
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
	};

	const animationObj = {
		transform: `
      translateX(${SpringToFrom(2, -1000, 1, 'Wobbly')}px)
      translateX(${SpringToFrom(FPS_INTRO - 20, 0, 1000, 'Slow')}px)
    `,
	};

	return (
		<ClubNameContainer>
			<BundleCategoryName styleObj={styleObj} animationObj={animationObj} />
		</ClubNameContainer>
	);
};
