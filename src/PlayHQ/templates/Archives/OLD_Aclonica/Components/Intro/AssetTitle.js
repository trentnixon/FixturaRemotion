import styled from 'styled-components';
import {FromLeftToRight} from '../../../../../Animation/ClipWipe';
import {GetBackgroundContractColorForText} from '../../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';
export const AssetTitle = (props) => {
	const {fontFamily, FPS_INTRO, THEME, VIDEOMETA} = props;
	const frame = useCurrentFrame();
	const letters = VIDEOMETA.Video.Title.split('');
	const lettersCount = letters.length;
	const framesPerLetter = Math.floor(FPS_INTRO / 4 / lettersCount);

	return (
		<>
			<AccountTitle
				style={{
					fontFamily,
					transform: `translateY(${SpringToFrom(35, -30, 0, 'Wobbly')}px)`,
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
					opacity: interpolateOpacityByFrame(frame, 35, 70, 0, 1),
				}}
			>
				{VIDEOMETA.grouping_category}
			</AccountTitle>

			<VideoTitle
				style={{
					fontFamily,
					/* clipPath: FromLeftToRight(14, 'Wobbly'), */
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
				}}
			>
				{letters.map((letter, index) => (
					<Letter
						key={index}
						index={index}
						frame={frame}
						startFrame={index + 1}
						endFrame={framesPerLetter * (index + 1)}
					>
						{letter}
					</Letter>
				))}
			</VideoTitle>
		</>
	);
};
//

const Letter = styled.div.attrs((props) => {
	const translateX = SpringToFrom(
		props.index * 2,
		1200,
		0,
		'Wobbly',
		'fast',
		props.startFrame,
		props.endFrame
	);
	const opacity = interpolateOpacityByFrame(
		props.frame,
		props.startFrame,
		props.endFrame,
		0,
		1
	);
	return {
		style: {
			transform: `translateX(${translateX}px)`,
			opacity,
		},
	};
})`
	display: inline-block;
	transition: transform 0.5s ease-out, opacity 0.5s ease-out;
`;

const VideoTitle = styled.h1`
	width: 100%;
	font-weight: 900;
	font-size: 9em;
	margin: 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	z-index: 2000;
`;

const AccountTitle = styled.h3`
	width: 80%;
	font-weight: 400;
	font-size: 2em;
	margin: 10px 0 1.2em 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	z-index: 2000;
`;

{
	/* <VideoTitle
				style={{
					fontFamily,
					clipPath: FromLeftToRight(14, 'Wobbly'),
					color: GetBackgroundContractColorForText(
						THEME.primary,
						THEME.secondary
					),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_INTRO - 30,
						FPS_INTRO - 15,
						1,
						0
					),
				}}
			>
				{VIDEOMETA.Video.Title}
			</VideoTitle> */
}
