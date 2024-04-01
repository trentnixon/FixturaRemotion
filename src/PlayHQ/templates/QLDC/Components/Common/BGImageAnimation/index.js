/* eslint-disable no-case-declarations */
import {useCurrentFrame} from 'remotion';
import {darkenColor} from '../../../../../utils/colors';

import { GradientBackground } from '../../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import { BlankColorBackground } from '../../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import { QLDCImageBackground } from '../../../../../structural/Backgrounds/ImageBackground/QLDC_ImageBackground';

// Helper function to check the image size ratio compared to the screen size

// CNSW
export const BGImageAnimation = (props) => {
	const {TemplateVariation, StyleConfig} = props;
	const {Color} = StyleConfig;
	const frame = useCurrentFrame();

	const backgroundColor = Color.Primary.Main;
	const SidePanelStyles = {
		width: '100%',
		height: '100%',
		zIndex: 0,
		position: 'absolute',
		backgroundColor: '#ECECEC',
	};
	const renderBackground = (TemplateVariation) => {
		switch (TemplateVariation.Background) {
			case 'Gradient':
				// Define your gradient here or pass it through props
				const gradient = `linear-gradient(0deg, ${darkenColor(
					Color.Primary.Main
				)}, ${Color.Secondary.Darken})`;
				return <GradientBackground gradient={gradient} {...props} />;
			default:
				return <BlankColorBackground backgroundColor={backgroundColor} />;
		}
	};

	return (
		<div style={{backgroundColor: 'white'}}>
			<QLDCImageBackground frame={frame} {...props} />
			{renderBackground(TemplateVariation)}

			<div style={SidePanelStyles} />
		</div>
	);
};
