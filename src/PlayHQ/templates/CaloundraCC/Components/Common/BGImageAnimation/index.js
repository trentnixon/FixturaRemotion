import ImageBackgroundSimple from '../../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import CreateNoiseBackground from '../../../../../structural/Backgrounds/NoiseBackground/CreateNoise';
import {SimpleGradientBackground} from '../../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';

import {useStylesContext} from '../../../../../context/StyleContext';
import StaticImageBackgroundSimple from '../../../../../structural/Backgrounds/ImageBackground/StaticImageBackgroundSimple';

export const BGImageAnimation = () => {
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps ?? {};

	const renderBackground = (TemplateVariation) => {
		if (!TemplateVariation) {
			throw new Error('BGImageAnimation: missing data: TemplateVariation');
		}

		switch (TemplateVariation.Background) {
			case 'Image':
				return <ImageBackgroundSimple />;
			case 'Graphics':
				return <CreateNoiseBackground />;
			case 'Gradient':
				return <SimpleGradientBackground />;
			case 'StaticImage':
				return <StaticImageBackgroundSimple />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return renderBackground(TemplateVariation);
};
