import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';
const test = false;
export const settings = {
	fontConfig: fonts.heebo,
	defaultCopyFontFamily: fonts.heebo,
	gradientDegree: '0deg', // Set gradient degree specific to Basic
	heights: {
		AssetHeight: 1350,
		Header: 190,
		Footer: 110,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'center',
	},
	fontSizing: {
		Title: {
			L: test || '7em',
			M: test || '5em',
			S: test || '3em',
		},
		TitleAlt: {
			XL: test || '6em',
			L: test || '2em',
			M: test || '1.5em',
			S: test || '1em',
		},
		Copy: {
			XL: test || '4.8em',
			L: test || '3em',
			M: test || '2em',
			S: test || '1.5em',
			XS: test || '1em',
		},
	},
	letterSpacing: {
		Title: '-2px',
		TitleAlt: '-3px',
		Copy: '-2px',
	},
	lineHeight: {
		Title: '0.8em',
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
			primary: '#3025b5',
			secondary: '#ea2f2f',
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
			useVideo:
				'https://fixtura.s3.ap-southeast-2.amazonaws.com/Fixtura_graphic_BG_Test003_8d811f41ca_1_67822a2468.mp4',
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

const graphicsVariant = {
	Video: {
		TemplateVariation: {
			Background: 'Graphics',
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

export const basicTypes = ['Graphics', 'Solid', 'Image', 'Gradient', 'Video'];
// Merge common options with variant-specific options
export const basicVariants = {
	Graphics: _.merge({}, _.cloneDeep(commonOptions), graphicsVariant),
	Solid: _.merge({}, _.cloneDeep(commonOptions), solidVariant),
	Image: _.merge({}, _.cloneDeep(commonOptions), imageVariant),
	Video: _.merge({}, _.cloneDeep(commonOptions), videoVariant),
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
