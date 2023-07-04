import {interpolateColors, useCurrentFrame} from 'remotion';
import {VideoTitle, FlexContainer} from '../../Common/CommonComponents';
export const Sequence2 = () => {
	const frame = useCurrentFrame();

	const color = interpolateColors(frame, [0, 45], ['#000000', '#0953AA']); // Rgba(255, 128, 0, 1)

	const color2 = interpolateColors(frame, [0, 45], ['#0953AA', '#3CE96C']); // Rgba(255, 128, 0, 1)
	return (
		<> 
			<FlexContainer
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				flexWrap="wrap"
				background={`linear-gradient(106.94deg, ${color} 10.58%, ${color2} 100.39%)`}
			>{/* 
				<VideoTitle
					color="#fff"
					fontSize="32px"
					lineHeight="1.2em"
					style={{
						width: '600px',
					}}
				>
					FIXTURA
				</VideoTitle>
				<VideoTitle
					color="#fff"
					fontSize="60px"
					width="600px"
					align="right"
          top="220px"
          left="620px"
          lineHeight="1em"
				>
					Use your competition stats the correct way!
				</VideoTitle> */}
			</FlexContainer>
		</>
	);
};
