import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';

export const AccountName = (props) => {
	const {FPS_INTRO, VIDEOMETA, StyleConfig} = props;
	const {Font, Color} = StyleConfig;

	const getDynamicFontSize = (text) => {
		if (text?.length <= 10) return '5em'; // Short strings
		if (text?.length <= 20) return '3em'; // Medium strings
		return '2.5em'; // Long strings
	};
	return (
		<ClubNameContainer>
			<ClubName
				style={{
					...Font.Title,
					fontSize: getDynamicFontSize(VIDEOMETA.grouping_category),
					color: getContrastColor(Color.Primary.Main),
					transform: `translateX(${SpringToFrom(
						2,
						-1000,
						1,
						'Wobbly'
					)}px) translateX(${SpringToFrom(
						FPS_INTRO - 20,
						0,
						'1000',
						'Slow'
					)}px)`,
				}}
			>
				{VIDEOMETA.grouping_category}
			</ClubName>
		</ClubNameContainer>
	);
};

const ClubNameContainer = styled.div`
	width: auto;
	z-index: 2000;
	width: 80%;
	display: flex;
	align-items: flex-start;
	justify-content: center;
`;

const ClubName = styled.h1`
	font-weight: 400;

	margin: 0px;
	padding: 0;
	line-height: 0.9em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	color: #ffffff;
`;
