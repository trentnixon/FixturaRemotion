import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {
	FromLeftToRight,
	FromRightToLeft,
} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 0px;
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
	ComponentFPS,
	frame,
	textAlign,
	Font,
}) => {
	const isFrameInRange = (frame, range) => {
		return frame >= range.Start && frame <= range.End;
	};
	//console.log('isFrameInRange ', isFrameInRange(frame, ComponentFPS));

	const commonStyles = {
		...Font.Copy,
		color,
		clipPath: FromRightToLeft(ComponentFPS.Start, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			ComponentFPS.End - 15,
			ComponentFPS.End,
			1,
			0
		),
		textAlign,
		display: isFrameInRange(frame, ComponentFPS) ? 'block' : 'none',
	};

	return (
		<HeaderCopy style={{...commonStyles, width}}>
			{restrictString(label, 50)}
		</HeaderCopy>
	);
};

export const FixtureDetails = (props) => {
	const {matchData, THEME, fontFamily, ComponentFPS, Color, Font} = props;

	const {ground, round, grade} = matchData;
	const frame = useCurrentFrame();

	const MetaOBJ = [
		{
			value: [grade.gradeName, round],
			label: 'Display',
		},
		{
			value: [ground],
			label: 'Players',
		},
	];
	return (
		<>
			<HeaderContainerStyles
				THEME={THEME}
				style={{
					clipPath: FromLeftToRight(ComponentFPS.Display.Start, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						ComponentFPS.Players.End - 15,
						ComponentFPS.Players.End,
						1,
						0
					),
				}}
			>
				{MetaOBJ.map((item) => {
					return item.value.map((value, ii) => {
						return (
							<HeaderItem
								key={ii}
								Font={Font}
								label={value}
								width="100%"
								fontFamily={fontFamily}
								color={Color.Primary.BackgroundContractColor}
								ComponentFPS={ComponentFPS[item.label]}
								frame={frame}
								textAlign="center"
							/>
						);
					});
				})}
			</HeaderContainerStyles>
		</>
	);
};
