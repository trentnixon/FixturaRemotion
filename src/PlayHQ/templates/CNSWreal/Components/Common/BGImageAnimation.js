import {SimpleDualToneGradientPrimaryBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import {useStylesContext} from '../../../../context/StyleContext';
import {CNSWSpokesIntro} from '../../../../structural/Backgrounds/SVGBackground/CNSWSpokes/Intro';
import {CNSWSpokesContent} from '../../../../structural/Backgrounds/SVGBackground/CNSWSpokes/content';

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
				return <ImageBackgroundSimple />;
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
