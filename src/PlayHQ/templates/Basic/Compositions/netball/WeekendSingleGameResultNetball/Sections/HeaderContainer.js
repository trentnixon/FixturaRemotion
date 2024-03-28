import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px 10px;
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
	ComponentFPS,
	frame,
	textAlign,
	StyleConfig,
}) => {
	const {Font} = StyleConfig;
	const commonStyles = {
		...Font.Copy,
		color,
		clipPath: FromTopToBottom(ComponentFPS.Start, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			ComponentFPS.End-15,
			ComponentFPS.End,
			1,
			0
		),
		textAlign,
	};

	return (
		<HeaderCopy style={{...commonStyles, width}}>
			{restrictString(label, 50)}
		</HeaderCopy>
	);
};

export const HeaderContainer = (props) => {
	const {matchData, THEME, fontFamily, ComponentFPS, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {ground, round, grade} = matchData;

	const frame = useCurrentFrame();
	return (
		<>
			<HeaderContainerStyles
				THEME={THEME}
				style={{
					clipPath: FromMiddle(ComponentFPS.Players.Start, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						ComponentFPS.Players.End - 15,
						ComponentFPS.Players.End,
						1,
						0
					),
				}}
			>
				<HeaderItem
					StyleConfig={StyleConfig}
					label={grade.gradeName}
					width="30%"
					fontFamily={fontFamily}
					color={Color.Primary.BackgroundContractColor}
					ComponentFPS={ComponentFPS.Display}
					frame={frame}
					textAlign="left"
				/>

				<HeaderItem
					StyleConfig={StyleConfig}
					label={ground}
					width="100%"
					fontFamily={fontFamily}
					color={Color.Primary.BackgroundContractColor}
					ComponentFPS={ComponentFPS.Players}
					frame={frame}
					textAlign="center"
				/>

				<HeaderItem
					StyleConfig={StyleConfig}
					label={`${round}`}
					width="30%"
					fontFamily={fontFamily}
					color={Color.Primary.BackgroundContractColor}
					ComponentFPS={ComponentFPS.Display}
					frame={frame}
					textAlign="right"
				/>
			</HeaderContainerStyles>
		</>
	);
};
