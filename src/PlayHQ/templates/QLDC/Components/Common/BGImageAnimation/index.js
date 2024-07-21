/* eslint-disable no-case-declarations */
import {QLDCGradientBackground} from '../../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {QLDCImageBackground} from '../../../../../structural/Backgrounds/ImageBackground/QLDC_ImageBackground';
export const BGImageAnimation = () => {
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

	return (
		<div style={cleanPlate}>
			<QLDCImageBackground />
			<QLDCGradientBackground />
			<div style={SidePanelStyles} />
		</div>
	);
};
