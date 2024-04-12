import {SimpleGradientBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import {CNSWSVGBackground} from '../../../../structural/Backgrounds/SVGBackground/CNSW/CNSWSVGBackground';
import {darkenColor} from '../../../../utils/colors';

// CNSW
export const BGImageAnimation = (props) => {
	const {THEME, TemplateVariation, Sport, HeroImage, TIMINGS} = props.BuildProps ?? {};
	const backgroundColor = THEME?.primary ?? null;
	const renderBackground = (THEME, TemplateVariation) => {
		if (!THEME || !TemplateVariation) {
			throw new Error(
				'BGImageAnimation: missing data: THEME or TemplateVariation'
			);
		}

		switch (TemplateVariation.Background) {
			case 'Image':
				return (
					<ImageBackgroundSimple
						backgroundColor={darkenColor(backgroundColor, 5)}
						HeroImage={HeroImage}
						TIMINGS={TIMINGS}
						{...props}
					/>
				);
			case 'Gradient':
				return <SimpleGradientBackground THEME={THEME} DEG="20deg" />;
			default:
				return (
					<SimpleBlankColorBackground
						backgroundColor={darkenColor(backgroundColor, 7)}
					/>
				);
		}
	};

	return (
		<>
			<CNSWSVGBackground THEME={THEME} Sport={Sport} />
			{renderBackground(THEME, TemplateVariation)}
		</>
	);
};
