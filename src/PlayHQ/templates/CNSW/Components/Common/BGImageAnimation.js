import {SimpleGradientBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import {CNSWSVGBackground} from '../../../../structural/Backgrounds/SVGBackground/CNSW/CNSWSVGBackground';

// CNSW
export const BGImageAnimation = (props) => {
	const {THEME, TemplateVariation, Sport} = props.BuildProps ?? {};
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
					<ImageBackgroundSimple backgroundColor={backgroundColor} {...props} />
				);
			case 'Gradient':
				return <SimpleGradientBackground THEME={THEME} DEG="20deg" />;
			default:
				return <SimpleBlankColorBackground backgroundColor={backgroundColor} />;
		}
	};

	return (
		<>
			<CNSWSVGBackground THEME={THEME} Sport={Sport} />
			{renderBackground(THEME, TemplateVariation)}
		</>
	);
};
