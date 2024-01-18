import styled from 'styled-components';
import {FromLeftToRight} from '../../../../Animation/ClipWipe';
import {
	GetBackgroundContractColorForText,
	getContrastColor,
} from '../../../../utils/colors';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {getDynamicFontSize} from '../../utils/Copy';
export const AssetTitle = (props) => {
	const {FPS_INTRO, THEME, VIDEOMETA, StyleConfig} = props;
	const frame = useCurrentFrame();

	console.log('StyleConfig', StyleConfig.Font.Copy);
	return (
		<>
			<VideoTitle
				style={{
					...StyleConfig.Font.Title,
					fontSize: getDynamicFontSize(VIDEOMETA.grouping_category),
					clipPath: FromLeftToRight(7, 'Wobbly'),
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
			</VideoTitle>
			<AccountTitle
				style={{
					...StyleConfig.Font.Copy,
					fontSize:'2em',
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
				{VIDEOMETA.Club.Name}
			</AccountTitle>
		</>
	);
};

const VideoTitle = styled.h1`
	width: 100%;
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
	font-size: 2em;
	margin: 10px 0 0 0;
	padding: 0;
	line-height: 1em;
	text-align: center;
	letter-spacing: -0.02em;
	text-transform: uppercase;
	z-index: 2000;
`;
