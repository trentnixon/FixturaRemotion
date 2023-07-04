import {interpolateColors, useCurrentFrame} from 'remotion';
import {VideoTitle, FlexContainer} from '../../Common/CommonComponents';
export const Sequence4 = () => {
	const frame = useCurrentFrame();

	const color = interpolateColors(frame, [0, 45], ['#3CE96C', '#363636']); // Rgba(255, 128, 0, 1)

	const color2 = interpolateColors(frame, [0, 45], ['#363636', '#4C72A0']); // Rgba(255, 128, 0, 1)
	return (
		<>
			<FlexContainer
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				flexWrap="wrap"
				background={`linear-gradient(106.94deg, ${color} 10.58%, ${color2} 100.39%)`}
			>
			{/* 	<VideoTitle
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
