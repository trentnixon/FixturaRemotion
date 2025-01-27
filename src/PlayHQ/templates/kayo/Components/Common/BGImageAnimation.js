import {SimpleDualToneGradientSecondaryBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import {useStylesContext} from '../../../../context/StyleContext';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundWithHue';

export const BGImageAnimation = () => {
	const {BuildProps, THEME} = useStylesContext();
	const {TemplateVariation} = BuildProps ?? {};

	const renderBackground = (TemplateVariation) => {
		if (!THEME || !TemplateVariation) {
			throw new Error(
				'BGImageAnimation: missing data: THEME or TemplateVariation'
			);
		}
		console.log('TemplateVariation.Background ', TemplateVariation);
		switch (TemplateVariation.Background) {
			case 'Image':
				return <ImageBackgroundSimple />;
			case 'Gradient':
				return <SimpleDualToneGradientSecondaryBackground />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return <>{renderBackground(TemplateVariation)}</>;
};
