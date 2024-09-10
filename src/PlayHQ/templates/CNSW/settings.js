import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';

// Set font specific to Basic
const test = false; // '0.2em';
export const settings = {
	fontConfig: fonts.robotoCondensed,
	defaultCopyFontFamily: fonts.robotoCondensed,
	gradientDegree: '20deg', // Set gradient degree specific to CNSW
	heights: {
		AssetHeight: 1350,
		Header: 230,
		Footer: 120,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'left',
	},
	fontSizing: {
		Title: {
			L: test || '9em',
			M: test || '5.5em',
			S: test || '2.5em',
		},
		TitleAlt: {
			XL: test || '7.5em',
			L: test || '3em',
			M: test || '2.5em',
			S: test || '2em',
		},
		Copy: {
			XL: test || '3.5em',
			L: test || '2.5em',
			M: test || '2em',
			S: test || '1.5em',
			XS: test || '1em',
		},
	},
	letterSpacing: {
		Title: '-3px',
		Copy: '-2px',
		TitleAlt: '-2px',
	},
	lineHeight: {
		Title: '1em',
		Copy: '1em',
		TitleAlt: '1em',
	},
	fontWeight: {
		Title: {
			Bold: '900',
			Semi: '600',
			Normal: '400',
			Thin: '200',
		},
		Copy: {
			Bold: '900',
			Semi: '600',
			Normal: '400',
			Thin: '200',
		},
	},
};


// ******************** Development Settings ********************
// Set variant specific to Basic


const commonOptions = {
	Video: {
		Theme: {
			dark: '#111',
			white: '#FFF',
			primary: '#352466',
			secondary: '#ffa500',
		},
		HeroImage: {
			url: 'https://fixtura.s3.ap-southeast-2.amazonaws.com/8ffe9be9_0ac3_4325_851b_5e15672aad9c_061fe22535.jpeg',
			ratio: 'landscape',
			width: 3680,
			height: 2453,
		},

		TemplateVariation: {
			useBackground:
				'https://fixtura.s3.ap-southeast-2.amazonaws.com/default-background.png',
		},
	},
};

const gradientVariant = {
	Video: {
		TemplateVariation: {
			Background: 'Gradient',
		},
	},
};

const videoVariant = {
	Video: {
		TemplateVariation: {
			Background: 'Video',
		},
	},
};


const imageVariant = {
	Video: {
		TemplateVariation: {
			Background: 'Image',
		},
	},
};

const solidVariant = {
	Video: {
		TemplateVariation: {
			Background: false,
		},
	},
};

export const cnswTypes = ['Solid', 'Image', 'Gradient', 'Video']
export const cnswVariants = {
	Solid: _.merge({}, _.cloneDeep(commonOptions), solidVariant),
	Image: _.merge({}, _.cloneDeep(commonOptions), imageVariant),
	Video: _.merge({}, _.cloneDeep(commonOptions), videoVariant),
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
