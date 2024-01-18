import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromMiddle, FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 40px;
	padding: 0px 10px;
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.5em;
	line-height: 1.2em;
	margin: 0;
`;

const HeaderItem = ({
	label,
	width,
	color,
	FPS_SCORECARD,
	frame,
	textAlign,
	StyleConfig,
}) => {
	const {Font} = StyleConfig;
	const commonStyles = {
		...Font.Copy,
		color: color,
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
		textAlign,
	};

	return (
		<HeaderCopy style={{...commonStyles, width}}>
			{restrictString(label, 35)}
		</HeaderCopy>
	);
};

export const HeaderContainer = (props) => {
	const {matchData, THEME, fontFamily, FPS_SCORECARD, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {type, round, gradeName} = matchData;
	const frame = useCurrentFrame();
	return (
		<HeaderContainerStyles
			THEME={THEME}
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}}
		>
			<HeaderItem
				StyleConfig={StyleConfig}
				label={gradeName}
				width="50%"
				fontFamily={fontFamily}
				color={Color.Primary.BackgroundContractColor}
				FPS_SCORECARD={FPS_SCORECARD}
				frame={frame}
				textAlign="left"
			/>

			<HeaderItem
				StyleConfig={StyleConfig}
				label={`${type} - ${round}`}
				width="50%"
				fontFamily={fontFamily}
				color={Color.Primary.BackgroundContractColor}
				FPS_SCORECARD={FPS_SCORECARD}
				frame={frame}
				textAlign="right"
			/>
		</HeaderContainerStyles>
	);
};
