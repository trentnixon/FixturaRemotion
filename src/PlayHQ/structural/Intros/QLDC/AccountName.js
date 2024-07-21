import React from 'react';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../Animation/ClipWipe';
import {getContrastColor} from '../../../utils/colors';
import {SpringToFrom} from '../../../Animation/RemotionSpring';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {useStylesContext} from '../../../context/StyleContext';
import {BundleCategoryName} from '../../../common/components/presentational/BundleCategory';

const ClubNameContainer = styled.div`
	width: auto;
	z-index: 2000;
	width: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

export const AccountName = () => {
	const {DATA} = useVideoDataContext();
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {Font} = StyleConfig;
	const {FPS_INTRO} = TIMINGS;

	const getDynamicFontSize = (text) => {
		if (text?.length <= 10) return '4em'; // Short strings
		if (text?.length <= 20) return '3em'; // Medium strings
		return '2.5em'; // Long strings
	};

	const styleObj = {
		fontSize: getDynamicFontSize(DATA.VIDEOMETA.grouping_category),
		color: getContrastColor('#ECECEC'),
		...Font.TitleAlt,
		margin: '0px',
		padding: '0',
		lineHeight: '0.9em',
		textAlign: 'center',
		letterSpacing: '-0.02em',
		textTransform: 'uppercase',
	};

	const animationObj = {
		clipPath: FromTopToBottom(7, 'Wobbly'),
		transform: `translateY(${SpringToFrom(
			2,
			-1000,
			1,
			'Wobbly'
		)}px) translateY(${SpringToFrom(FPS_INTRO - 40, 0, -1000, 'Slow')}px)`,
	};

	return (
		<ClubNameContainer>
			<BundleCategoryName styleObj={styleObj} animationObj={animationObj} />
		</ClubNameContainer>
	);
};
