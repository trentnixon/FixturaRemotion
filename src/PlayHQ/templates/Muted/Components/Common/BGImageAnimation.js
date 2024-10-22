import {SimpleDualToneGradientSecondaryBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {
	DedicatedBlankColorBackground,
	SimpleBlankColorBackground,
} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import {useStylesContext} from '../../../../context/StyleContext';
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
			case 'dedicatedSolid':
				return <DedicatedBlankColorBackground />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return <>{renderBackground(TemplateVariation)}</>;
};
