import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
export const AssetTitle = (props) => {
	const {FPS_INTRO, VIDEOMETA, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	return (
		<>
			<VideoTitle
				style={{
					...Font.Title,
					color: getContrastColor(Color.Primary.Main),
					transform: `translateX(${SpringToFrom(
						3,
						-1000,
						1,
						'Wobbly'
					)}px) translateX(${SpringToFrom(
						FPS_INTRO - 18,
						0,
						'1000',
						'Slow'
					)}px)`,
				}}
			>
				{VIDEOMETA.Video.Title}
			</VideoTitle>
			<AccountTitle
				style={{
					...Font.Title,
					color: getContrastColor(Color.Primary.Main),
					transform: `translateX(${SpringToFrom(
						0,
						-1000,
						1,
						'Wobbly'
					)}px) translateX(${SpringToFrom(
						FPS_INTRO - 25,
						0,
						'1000',
						'Slow'
					)}px)`,
				}}
			>
				{VIDEOMETA.Club.Name}
			</AccountTitle>
		</>
	);
};

const VideoTitle = styled.h1`
	width: 100%;
	font-weight: 900;
	font-size: 9em;
	margin: 0;
	padding: 0;
	line-height: 0.8em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	z-index: 2000;
`;

const AccountTitle = styled.h3`
	width: 100%;
	font-weight: 400;
	font-size: 2em;
	margin: 10px 0 0 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	z-index: 2000;
`;
