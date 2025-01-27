import {SimpleDualToneGradientSecondaryBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import {useStylesContext} from '../../../../context/StyleContext';
import {BGImage} from '../../../../structural/Backgrounds/UI/Image';
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
		console.log('TemplateVariation.Background ', TemplateVariation);
		switch (TemplateVariation.Background) {
			case 'Image':
				return <ImageBackgroundWithHue />;
			case 'Gradient':
				return <SimpleDualToneGradientSecondaryBackground />;
			default:
				return <SimpleBlankColorBackground />;
		}
	};

	return (
		<>
			<BGImage
				url={TemplateVariation.useBackground}
				style={{
					position: 'absolute',
					zIndex: '10',
				}}
			/>
			{renderBackground(TemplateVariation)}
		</>
	);
};
