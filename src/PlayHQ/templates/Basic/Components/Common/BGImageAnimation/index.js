import {preloadImage} from '@remotion/preload';
import {darkenColor, getBackgroundColor} from '../../../../../utils/colors';
import ImageBackgroundSimple from '../../../../../structural/Backgrounds/ImageBackground/ImageBackgroundSimple';
import CreateNoiseBackground from '../../../../../structural/Backgrounds/NoiseBackground/CreateNoise';

export const BGImageAnimation = (props) => {
	const {HeroImage, THEME} = props;
	const {url} = HeroImage || {};
	const backgroundColor = getBackgroundColor(THEME.primary, THEME.secondary);

	if (url) {
		preloadImage(url);
		return (
			<ImageBackgroundSimple backgroundColor={darkenColor(backgroundColor,20) } {...props} />
		);
	}

	// Default to CreateNoise if HeroImage is null or invalid
	return (
		<CreateNoiseBackground THEME={THEME} backgroundColor={darkenColor(backgroundColor,15)} />
	);
};
 