import {SimpleDualToneGradientPrimaryBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import {useStylesContext} from '../../../../context/StyleContext';
import {CNSWSpokesIntro} from '../../../../structural/Backgrounds/SVGBackground/CNSWSpokes/Intro';
import {CNSWSpokesContent} from '../../../../structural/Backgrounds/SVGBackground/CNSWSpokes/content';
import ImageBackgroundWithHue from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundWithHue';

export const BGImageAnimation = () => {
	const {BuildProps, THEME} = useStylesContext();
	const {TemplateVariation} = BuildProps ?? {};

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
				return <SimpleDualToneGradientPrimaryBackground />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return (
		<>
			<CNSWSpokesIntro />
			<CNSWSpokesContent />
			{renderBackground(TemplateVariation)}
		</>
	);
};
