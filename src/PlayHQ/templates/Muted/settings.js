import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';

// Set font specific to Basic
const test = false; // '0em';
export const settings = {
	fontConfig: fonts.Gurajada,
	defaultCopyFontFamily: fonts.HindMysuru,
	fontSizing: {
		Title: {
			L: test || '7em',
			M: test || '4em',
			S: test || '3em',
		},
		TitleAlt: {
			XL: test || '6.5em',
			L: test || '4.5em',
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
		TitleAlt: '.6em',
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

		TemplateVariation: {
			useForcedColor: '#C6C7C9',
		},
	},
};

const gradientVariant = {
	Video: {
		TemplateVariation: {
			Background: 'dedicatedSolid',
			useForcedColor: '#C6C7C9',
		},
	},
};

export const mutedTypes = ['Gradient'];
export const mutedVariants = {
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
