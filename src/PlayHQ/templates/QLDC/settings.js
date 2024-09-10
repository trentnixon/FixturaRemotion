import fonts from '../../utils/global/init/fonts';
import _ from 'lodash';

// Set font specific to Basic
const test = false; // '0.2em';
export const settings = {
	fontConfig: fonts.Impact,
	defaultCopyFontFamily: fonts.Franklin_Gothic_Book,
	gradientDegree: '45deg',
	heights: {
		AssetHeight: 1350,
		Header: 170,
		Footer: 130,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'right',
	},
	fontSizing: {
		Title: {
			L: test || '6.5em',
			M: test || '1.8em',
			S: test || '1.5em',
		},
		TitleAlt: {
			XL: test || '6.5em',
			L: test || '2em',
			M: test || '1.5em',
			S: test || '1em',
		},
		Copy: {
			XL: test || '4.8em',
			L: test || '3em',
			M: test || '1.8em',
			S: test || '1.5em',
			XS: test || '1em',
		},
	},
	letterSpacing: {
		Title: '1px',
		TitleAlt: '0px',
		Copy: '-1px',
	},
	lineHeight: {
		Title: '1.1em',
		Copy: '1em',
		TitleAlt: '1em',
	},
	fontWeight: {
		Title: {
			Bold: '500',
			Semi: '600',
			Normal: '400',
			Thin: '200',
		},
		Copy: {
			Bold: '500',
			Semi: '500',
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


export const qldcTypes = ['Gradient'];

export const qldcVariants = {
	Gradient: _.merge({}, _.cloneDeep(commonOptions), gradientVariant),
};
