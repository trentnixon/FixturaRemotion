/* eslint-disable no-case-declarations */
import {useCurrentFrame} from 'remotion';
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
		backgroundColor: 'white',
		height: '100%',
		width: '100%',
	};

	const SidePanelStyles = {
		width: '100%',
		height: '100%',
		zIndex: 0,
		position: 'absolute',
		backgroundColor: '#ffffff',
	};

	const gradient = `linear-gradient(45deg, ${darkenColor(
		Color.Primary.Main,
		25
	)}, ${lightenColor(Color.Primary.Main) })`;
	return (
		<div style={cleanPlate}>
			<BluredBGOverlay {...props}/>
			<QLDCImageBackground frame={frame} {...props} />
			
			<GradientBackground gradient={gradient} {...props} />
			<div style={SidePanelStyles} />
		</div>
	);
};

const BluredBGOverlay = ({FPS_MAIN}) => {
	const SidePanelStyles = {
		width: '150px',
		zIndex: 500,
		position: 'absolute',
		backgroundColor: '#ffffff',
		left: '175px',
		opacity: 0.3,
		height: `${SpringToFrom(90, 0, 100, 'Wobbly')}%`,
		transform: `translateX(${SpringToFrom(FPS_MAIN + 90, 0, -500, 'Slow')}px)` 
		
	};
	return <div style={SidePanelStyles} />;
};
