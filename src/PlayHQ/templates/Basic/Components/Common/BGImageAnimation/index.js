import {preloadImage} from '@remotion/preload';
import {darkenColor, getBackgroundColor} from '../../../../../utils/colors';
import ImageBackgroundSimple from '../../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import CreateNoiseBackground from '../../../../../structural/Backgrounds/NoiseBackground/CreateNoise';
import {SimpleGradientBackground} from '../../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';

export const BGImageAnimation = (props) => {
	const {THEME, TemplateVariation, HeroImage, TIMINGS} = props.BuildProps ?? {};
	console.log('HeroImage ', HeroImage);

	const renderBackground = (THEME, TemplateVariation) => {
		console.log(THEME, TemplateVariation);
		const backgroundColor = darkenColor(
			getBackgroundColor(THEME.primary, THEME.secondary),
			15
		)
		if (!THEME || !TemplateVariation) {
			throw new Error(
				'BGImageAnimation: missing data: THEME or TemplateVariation'
			);
		}

		switch (TemplateVariation.Background) {
			case 'Image':
				preloadImage(HeroImage.url);
				return (
					<ImageBackgroundSimple
						backgroundColor={backgroundColor}
						HeroImage={HeroImage}
						TIMINGS={TIMINGS}
						{...props}
					/>
				);
			case 'Graphics':
				return (
					<CreateNoiseBackground
						THEME={THEME}
						backgroundColor={backgroundColor}
					/>
				);

			case 'Gradient':
				return <SimpleGradientBackground THEME={THEME} DEG="0deg" />;
			default:
				return (
					<SimpleBlankColorBackground
						backgroundColor={darkenColor(
							getBackgroundColor(THEME.primary, THEME.secondary),
							7
						)}
					/>
				);
		}
	};

	// Default to CreateNoise if HeroImage is null or invalid
	return renderBackground(THEME, TemplateVariation);
};
