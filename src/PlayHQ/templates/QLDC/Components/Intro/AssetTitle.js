import styled from 'styled-components';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {
	GetBackgroundContractColorForText,
	getContrastColor,
} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import { SpringToFrom } from '../../../../Animation/RemotionSpring';
export const AssetTitle = (props) => {
	const {fontFamily, FPS_INTRO, THEME, VIDEOMETA} = props;
	const frame = useCurrentFrame();
	return (
		<>
			<VideoTitle
				style={{
					fontFamily,
					/* clipPath: FromLeftToRight(7, 'Wobbly'), */
					color: getContrastColor('#ECECEC'),
					transform: `translateY(${SpringToFrom(
						3,
						-1000,
						1,
						'Wobbly'
					)}px) translateY(${SpringToFrom(FPS_INTRO - 22, 0, 1000, 'Slow')}px)`,
					
				}}
			>
				{VIDEOMETA.Video.Title}
			</VideoTitle>
			<AccountTitle
				style={{
					fontFamily,
					/* clipPath: FromLeftToRight(14, 'Wobbly'), */
					color: getContrastColor('#ECECEC'),
					transform: `translateY(${SpringToFrom(
						0,
						1000,
						1,
						'Wobbly'
					)}px) translateY(${SpringToFrom(FPS_INTRO - 25, 0, '1000', 'Slow')}px)`,
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
