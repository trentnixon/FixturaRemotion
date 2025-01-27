import {SimpleGradientBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import {CNSWSVGBackground} from '../../../../structural/Backgrounds/SVGBackground/CNSW/CNSWSVGBackground';
import {useStylesContext} from '../../../../context/StyleContext';
import ImageBackgroundWithHue from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundWithHue';

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
				return <ImageBackgroundWithHue />;
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
