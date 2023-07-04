import {interpolateColors, useCurrentFrame, Img, staticFile} from 'remotion';
import {VideoTitle, FlexContainer} from '../../Common/CommonComponents';

export const Sequence1 = () => {
	const frame = useCurrentFrame();

	const color = interpolateColors(frame, [0, 45], ['#363636', '#000000']); // Rgba(255, 128, 0, 1)

	const color2 = interpolateColors(frame, [0, 45], ['#4C72A0', '#0953AA']); // Rgba(255, 128, 0, 1)
	return (
		<>
			<FlexContainer
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				flexWrap="wrap"
				background={`linear-gradient(106.94deg, ${color} 10.58%, ${color2} 100.39%)`}
			>
				{/* <VideoTitle
					fontSize="30px"
					align="right"
					width="40%"
					left="200px"
					top="290px"
					color="#fff"
				>
					The Premier AI-Generated Social Media Content Provider For Cricket
					Clubs And Associations
				</VideoTitle>
				<Img
					src={staticFile('assets/LogoF-white.png')}
					style={{
						position: 'absolute',
						top: '250px',
						right: '300px',
						width:'200px'
					}}
				/> */}
			</FlexContainer>
		</>
	);
};
