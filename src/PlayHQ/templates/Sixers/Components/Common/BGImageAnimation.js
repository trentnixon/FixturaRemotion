import {SimpleDualToneGradientSecondaryBackground} from '../../../../structural/Backgrounds/GradientBackground/GradientBackground';
import {SimpleBlankColorBackground} from '../../../../structural/Backgrounds/BlankColorBackground/BlankColorBackground';
import ImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import {useStylesContext} from '../../../../context/StyleContext';
import StaticImageBackgroundSimple from '../../../../structural/Backgrounds/ImageBackground/StaticImageBackgroundSimple';
import {BGImage} from '../../../../structural/Backgrounds/UI/Image';

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
