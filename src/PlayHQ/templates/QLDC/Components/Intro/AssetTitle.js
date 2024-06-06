import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';

export const AssetTitle = (props) => {
	const {FPS_INTRO, VIDEOMETA} = props;
	const {Font} = props.StyleConfig;
	return (
		<>
			<VideoTitle
				style={{
					...Font.Title,
					color: getContrastColor('#ECECEC'),
					transform: `translateY(${SpringToFrom(
						3,
						-1000,
						1,
						'Wobbly'
					)}px) translateY(${SpringToFrom(FPS_INTRO - 35, 0, 1000, 'Slow')}px)`,
				}}
			>
				{VIDEOMETA.Video.Title}
			</VideoTitle>
			<AccountTitle
				style={{
					...Font.TitleAlt,
					width: '80%',
					color: getContrastColor('#ECECEC'),
					transform: `translateY(${SpringToFrom(
						0,
						1000,
						1,
						'Wobbly'
					)}px) translateY(${SpringToFrom(
						FPS_INTRO - 37,
						0,
						1000,
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
	font-size: 7em;
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
