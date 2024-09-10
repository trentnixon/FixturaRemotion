import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';

// Set font specific to Basic
const test = false; // '0em';
export const settings = {
	fontConfig: fonts.Slightly_Marker,
	defaultCopyFontFamily: fonts['Resolve-Regular'],
	fontSizing: {
		Title: {
			L: test || '13em',
			M: test || '8em',
			S: test || '4em',
		},
		TitleAlt: {
			L: test || '3em',
			M: test || '2.5em',
			S: test || '2em',
		},
		Copy: {
			XL: test || '3.5em',
			L: test || '2.5em',
			M: test || '1.7em',
			S: test || '1.45em',
			XS: test || '0.75em',
		},
	},
	letterSpacing: {
		Title: '0px',
		Copy: '0px',
		TitleAlt: '-1px',
	},
	lineHeight: {
		Title: '1.09em',
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
			Bold: '900',
			Semi: '600',
			Normal: '400',
			Thin: '200',
		},
	},
	gradientDegree: '0deg', // Set gradient degree specific to CNSW
	heights: {
		AssetHeight: 1350,
		Header: 180,
		Footer: 170,
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
			primary: '#FF00A0',
			secondary: '#D40F7D',
		},
	/* 	HeroImage: {
			url: 'https://fixtura.s3.ap-southeast-2.amazonaws.com/8ffe9be9_0ac3_4325_851b_5e15672aad9c_061fe22535.jpeg',
			ratio: 'landscape',
			width: 3680,
			height: 2453,
		}, */

	/* 	TemplateVariation: {
			useBackground:
				'https://fixtura.s3.ap-southeast-2.amazonaws.com/default-background.png',
		}, */
	},
};

const gradientVariant = {
	Video: {
		TemplateVariation: {
			Background: 'Gradient',
		},
	},
};



export const sixersTypes = ['Gradient']
export const sixersVariants = {
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
