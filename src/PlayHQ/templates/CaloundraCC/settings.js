import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';

// Set font specific to Basic
const test = false; // '0.2em';
export const settings = {
	fontConfig: fonts.Impact,
	defaultCopyFontFamily: fonts.heebo,
	gradientDegree: '0deg', // Set gradient degree specific to Basic
	heights: {
		AssetHeight: 1290,
		Header: 250,
		Footer: 110,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'center',
	},
	fontSizing: {
		Title: {
			L: test || '7em',
			M: test || '5.5em',
			S: test || '4em',
		},
		TitleAlt: {
			XL: test || '3.5em',
			L: test || '3.3em',
			M: test || '2.5em',
			S: test || '2em',
		},
		Copy: {
			XL: test || '4.5em',
			L: test || '3.5em',
			M: test || '2em',
			S: test || '1.8em',
			XS: test || '1.4em',
		},
	},
	letterSpacing: {
		Title: '-1px',
		Copy: '-1px',
		TitleAlt: '-1px',
	},
	lineHeight: {
		Title: '1em',
		Copy: '1em',
		TitleAlt: '1em',
	},
	fontWeight: {
		Title: {Bold: '400', Normal: '400', Thin: '200'},
		Copy: {Bold: '900', Normal: '400', Thin: '200'},
	},
};


// ******************** Development Settings ********************
// Set variant specific to Basic


const commonOptions = {
	Video: {
		Theme: {
			dark: '#111',
			white: '#FFF',
			primary: '#38320E',
			secondary: '#FFD600',
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

export const cccTypes = ['Solid', 'Image', 'Gradient', 'Video']
export const cccVariants = {
	Solid: _.merge({}, _.cloneDeep(commonOptions), solidVariant),
	Image: _.merge({}, _.cloneDeep(commonOptions), imageVariant),
	Video: _.merge({}, _.cloneDeep(commonOptions), videoVariant),
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
