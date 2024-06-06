/* eslint-disable no-case-declarations */
import {useCurrentFrame, Img, AbsoluteFill} from 'remotion';
import {darkenColor, lightenColor} from '../../../../../utils/colors';

import {GradientBackground} from '../../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {BlankColorBackground} from '../../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import {QLDCImageBackground} from '../../../../../structural/Backgrounds/ImageBackground/QLDC_ImageBackground';
import {SpringToFrom} from '../../../../../Animation/RemotionSpring';

// Helper function to check the image size ratio compared to the screen size

// CNSW
export const BGImageAnimation = (props) => {
	const {StyleConfig} = props;
	const {Color} = StyleConfig;
	const frame = useCurrentFrame();

	const cleanPlate = {
		backgroundColor: Color.Primary.Main,
		height: '100%',
		width: '100%',
	};

	const SidePanelStyles = {
		width: '100%',
		height: '100%',
		zIndex: 0,
		position: 'absolute',
		backgroundColor: Color.Primary.Main,
	};

	const gradient = `linear-gradient(45deg, ${darkenColor(
		Color.Primary.Main,
		25
	)}, ${lightenColor(Color.Primary.Main)})`;
	return (
		<div style={cleanPlate}>
			{/* 	<QLDCImageBackground frame={frame} {...props} />
			<GradientBackground gradient={gradient} {...props} /> */}
			<GradientTop {...props} />
			<BGImage />
		</div>
	);
};

const GradientTop = (props) => {
	const {StyleConfig} = props;
	const {Color} = StyleConfig;
	const GradientTopStyles = {
		zIndex: 200,
		width: '100%',
		height: '50%',
		background: `linear-gradient(180deg, ${Color.Secondary.Main},transparent)`,
	};

	return <div style={GradientTopStyles} />;
};

const BGImage = () => {
	const CCLBGImage =
		'https://fixtura.s3.ap-southeast-2.amazonaws.com/maxresdefault_0859fd2bcc.jpg';

	const BGImageStyles = {
		zIndex: 10,
		mixBlendMode: 'luminosity',
	};

	return (
		<AbsoluteFill style={BGImageStyles}>
			<Img
				style={{
					width: '100%',
					opacity: 0.25,
				}}
				src={CCLBGImage}
			/>
		</AbsoluteFill>
	);
};
