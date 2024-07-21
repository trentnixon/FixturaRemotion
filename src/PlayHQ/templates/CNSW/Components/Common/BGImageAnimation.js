import {SimpleGradientBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import {CNSWSVGBackground} from '../../../../structural/Backgrounds/SVGBackground/CNSW/CNSWSVGBackground';
import {useStylesContext} from '../../../../context/StyleContext';

export const BGImageAnimation = () => {
	const {BuildProps, THEME} = useStylesContext();
	const {TemplateVariation, Sport} = BuildProps ?? {};

	const renderBackground = (TemplateVariation) => {
		if (!THEME || !TemplateVariation) {
			throw new Error(
				'BGImageAnimation: missing data: THEME or TemplateVariation'
			);
		}

		switch (TemplateVariation.Background) {
			case 'Image':
				return <ImageBackgroundSimple />;
			case 'Gradient':
				return <SimpleGradientBackground />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return (
		<>
			<CNSWSVGBackground THEME={THEME} Sport={Sport} />
			{renderBackground(TemplateVariation)}
		</>
	);
};
