/* eslint-disable camelcase */
import {loadFont} from '@remotion/fonts';
import {staticFile} from 'remotion';

import {
	fontFamily as heeboFontFamily,
	loadFont as loadHeeboFont,
} from '@remotion/google-fonts/Heebo';
import {
	fontFamily as robotoFontFamily,
	loadFont as loadRobotoFont,
} from '@remotion/google-fonts/RobotoCondensed';
import {
	fontFamily as alfaSlabOneFontFamily,
	loadFont as loadAlfaSlabOneFont,
} from '@remotion/google-fonts/AlfaSlabOne';

// Local Fonts

const loadLocalFont = (OBJ) => {
	loadFont(OBJ).then(() => {
		console.log('Font loaded! ', OBJ.family);
		const fontPath = staticFile('/fonts/Druk_Medium.otf');
		console.log('Resolved Font Path: ', fontPath);
	});
};

const fonts = {
	heebo: {
		fontFamily: heeboFontFamily,
		loadFont: loadHeeboFont,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	robotoCondensed: {
		fontFamily: robotoFontFamily,
		loadFont: loadRobotoFont,
		fontOptions: {
			weights: ['300', '400', '700'],
			subsets: ['latin'],
		},
	},
	alfaSlabOne: {
		fontFamily: alfaSlabOneFontFamily,
		loadFont: loadAlfaSlabOneFont,
		fontOptions: {
			weights: ['400'],
			subsets: ['latin'],
		},
	},
	Druk: {
		fontFamily: 'Druk',
		isLocal: true,
		loadFont: () => {
			loadLocalFont({
				family: 'Druk',
				url: staticFile('/fonts/Druk/Druk_Medium.otf'),
				weight: '500',
			});
		},
		fontOptions: {
			weights: ['400'],
			subsets: ['latin'],
		},
	},
	'Resolve-Regular': {
		fontFamily: 'Resolve-Regular',
		loadFont: () => {
			loadLocalFont({
				family: 'Resolve-Regular',
				url: staticFile('/fonts/Resolve/Resolve-Regular.otf'),
				weight: '500',
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['400'],
			subsets: ['latin'],
		},
	},
	Slightly_Marker: {
		fontFamily: 'Slightly_Marker',
		loadFont: () => {
			loadLocalFont({
				family: 'Slightly_Marker',
				url: staticFile('/fonts/Slightly_Marker/Slightly_Marker.otf'),
				weights: ['200', '400', '600', '800', '900'],
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	Gloss_And_Bloom: {
		fontFamily: 'Gloss_And_Bloom',
		loadFont: () => {
			loadLocalFont({
				family: 'Gloss_And_Bloom',
				url: staticFile('/fonts/Gloss_And_Bloom/Gloss_And_Bloom.ttf'),
				weights: ['200', '400', '600', '800', '900'],
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	MonumentExtended: {
		fontFamily: 'MonumentExtended',
		loadFont: () => {
			loadLocalFont({
				family: 'MonumentExtended',
				url: staticFile('/fonts/MonumentExtended/MonumentExtended-Regular.otf'),
				weights: ['200', '400', '600', '800', '900'],
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	Tungsten: {
		fontFamily: 'Tungsten',
		loadFont: () => {
			loadLocalFont({
				family: 'Tungsten',
				url: staticFile('/fonts/Tungsten/Tungsten-Book.otf'),
				weights: ['200', '400', '600', '800', '900'],
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	Franklin_Gothic_Book: {
		fontFamily: 'Franklin_Gothic_Book',
		loadFont: () => {
			loadLocalFont({
				family: 'Franklin_Gothic_Book',
				url: staticFile('/fonts/Franklin_Gothic_Book/FRABK.TTF'),
				weights: ['200', '400', '600', '800', '900'],
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	Impact: {
		fontFamily: 'Impact',
		loadFont: () => {
			loadLocalFont({
				family: 'Impact',
				url: staticFile('/fonts/impact/impact.ttf'),
				weights: ['200', '400', '600', '800', '900'],
			});
		},
		isLocal: true,
		fontOptions: {
			weights: ['200', '400', '600', '800', '900'],
			subsets: ['latin'],
		},
	},
	// Add more fonts here as needed
};

export default fonts;
