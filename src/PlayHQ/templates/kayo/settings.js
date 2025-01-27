import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';

// Set font specific to Basic
const test = false; // '0em';
export const settings = {
	fontConfig: fonts.BungeeInline,
	defaultCopyFontFamily: fonts.Tungsten,
	fontSizing: {
		Title: {
			L: test || '3.5em',
			M: test || '4em',
			S: test || '3em',
		},
		TitleAlt: {
			XL: test || '5em',
			L: test || '3em',
			M: test || '2.5em',
			S: test || '2em',
		},
		Copy: {
			XL: test || '4.5em',
			L: test || '3.5em',
			M: test || '2.55em',
			S: test || '1.5em',
			XS: test || '0.7em',
		},
	},
	letterSpacing: {
		Title: '1px',
		Copy: '1px',
		TitleAlt: '1px',
	},
	lineHeight: {
		Title: '1em',
		Copy: '1em',
		TitleAlt: '1em',
	},
	fontWeight: {
		Title: {
			Bold: '800',
			Semi: '600',
			Normal: '400',
			Thin: '200',
		},
		Copy: {
			Bold: '800',
			Semi: '600',
			Normal: '400',
			Thin: '200',
		},
	},
	gradientDegree: '0deg', // Set gradient degree specific to CNSW
	heights: {
		AssetHeight: 1330,
		Header: 250,
		Footer: 120,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'center',
	},
};

// ******************** Development Settings ********************
// Set variant specific to Basic

const commonOptions = {
	Video: {
		Theme: {
			dark: '#111',
			white: '#FFF',
			primary: '#84FF19',
			secondary: '#009300',
		},
		HeroImage: {
			url: 'https://fixtura.s3.ap-southeast-2.amazonaws.com/8ffe9be9_0ac3_4325_851b_5e15672aad9c_061fe22535.jpeg',
			ratio: 'landscape',
			width: 3680,
			height: 2453,
		},

		TemplateVariation: 'Image',
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

export const kayoTypes = ['Image', 'Gradient', 'Video', 'Solid'];
export const kayoVariants = {
	Solid: _.merge({}, _.cloneDeep(commonOptions), solidVariant),
	Image: _.merge({}, _.cloneDeep(commonOptions), imageVariant),
	Video: _.merge({}, _.cloneDeep(commonOptions), videoVariant),
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
