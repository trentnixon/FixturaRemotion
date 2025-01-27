import CreateNoiseBackground from '../../../../../structural/Backgrounds/NoiseBackground/CreateNoise';
import {SimpleGradientBackground} from '../../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';

import {useStylesContext} from '../../../../../context/StyleContext';
import {VideoTestBackground} from '../../../../../structural/Backgrounds/VideoBackground/TEST/VideoTestBackground';
import ImageBackgroundWithHue from '../../../../../structural/Backgrounds/ImageBackground/ImageBackgroundWithHue';

export const BGImageAnimation = () => {
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps ?? {};

	console.log('BuildProps ', BuildProps);

	const renderBackground = (TemplateVariation) => {
		if (!TemplateVariation) {
			throw new Error('BGImageAnimation: missing data: TemplateVariation');
		}

		switch (TemplateVariation.Background) {
			case 'Image':
				return <ImageBackgroundWithHue />;
			case 'Graphics':
				return <CreateNoiseBackground />;
			case 'Gradient':
				return <SimpleGradientBackground />;
			case 'Video':
				return <VideoTestBackground />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return renderBackground(TemplateVariation);
};
