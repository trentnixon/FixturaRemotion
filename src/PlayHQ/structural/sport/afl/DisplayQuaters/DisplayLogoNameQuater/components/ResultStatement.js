import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {FromRightToLeft} from '../../../../../../Animation/ClipWipe';
import {restrictString} from '../../../../../../utils/copy';

// Dev note: Styled-components used for dynamic styling based on props
const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px 10px;
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	display: block;
	letter-spacing: -0.025em;
	text-transform: uppercase;
	width: 100%;
	font-size: 1.6em;
	line-height: 1.2em;
	margin: 0;
`;

// Dev note: Function component for header items, showcasing use of styled-components for styling based on props.
const HeaderItem = ({
	label,
	width,
	color,
	FPS_SCORECARD,
	frame,
	textAlign,
	Font,
}) => {
	const commonStyles = {
		...Font.Copy,
		color,
		clipPath: FromRightToLeft(15, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 15,
			FPS_SCORECARD,
			1,
			0
		),
		textAlign,
		fontWeight: 800,
	};

	// Dev note: Limit string length for UI consistency and avoid text overflow.
	return (
		<HeaderCopy style={{...commonStyles, width}}>
			{restrictString(label, 80)}
		</HeaderCopy>
	);
};

// Dev note: Component to display the result statement within a styled container.
export const ResultStatement = (props) => {
	const {matchData, fontFamily, FPS_SCORECARD, StyleConfig} = props;
	const {Color, Font} = StyleConfig;
	const {resultStatement} = matchData;

	const frame = useCurrentFrame();

	return (
		<HeaderContainerStyles>
			<HeaderItem
				Font={Font}
				label={`${resultStatement}`}
				width="100%"
				fontFamily={fontFamily}
				color={Color.Primary.BackgroundContractColor}
				FPS_SCORECARD={FPS_SCORECARD}
				frame={frame}
				textAlign="center"
			/>
		</HeaderContainerStyles>
	);
};

// Future improvements:
// - Consider extracting common styled-component styles into a separate file for reusability across components.
// - Evaluate the performance impact of dynamically styled components in high-frequency render scenarios and consider optimization techniques if necessary.

/*
LLM Notes:
Functionality: This file defines styled components and a React functional component used to display a header item with animation and styling based on props passed to it. It's part of a video rendering system using Remotion, designed to interpolate opacity and clip paths for animations based on frame counts, and restrict text string lengths for display purposes.
Context: The components are likely used in a larger video rendering project that involves dynamic text overlays with animation effects.
Location: The file is structured within a project
*/
