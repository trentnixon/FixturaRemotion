import styled from 'styled-components';
import {
	getContrastColor,
	darkenColor,
	lightenColor,
} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../Animation/ClipWipe';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 10px;
	margin-bottom: 15px;
	border-bottom: 3px solid ${(props) => lightenColor(props.THEME.secondary)};
	background-color: ${(props) => darkenColor(props.THEME.primary)};
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: 0.05em;
	text-transform: uppercase;
	width: auto;
	font-size: 1.45em;
	line-height:2em;
	width: 100%;
	font-weight: 400;
	margin:0;
`;


export const HeaderContainer = (props) => {
	const {Title,competition, FPS_LADDER, THEME, fontFamily} = props;
	const frame = useCurrentFrame();
	return (
		<HeaderContainerStyles
			THEME={THEME}
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
		>
			<HeaderCopy
				THEME={THEME}
				fontFamily={fontFamily}
				style={{
					color: getContrastColor(darkenColor(props.THEME.primary)),
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_LADDER - 30,
						FPS_LADDER,
						1,
						0
					),
				}}
			>
				{Title}
			</HeaderCopy>
			<HeaderCopy
				THEME={THEME}
				fontFamily={fontFamily}
				style={{
					textAlign:'right',
					color: getContrastColor(darkenColor(props.THEME.primary)),
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_LADDER - 30,
						FPS_LADDER,
						1,
						0
					),
				}}
			>
				{competition}
			</HeaderCopy>
			
		</HeaderContainerStyles>
	);
};
