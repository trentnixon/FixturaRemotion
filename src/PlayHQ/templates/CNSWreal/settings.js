import fonts from '../../utils/global/init/fonts';
const test = false; // '0.2em';
export const settings = {
	fontConfig: fonts.Impact,
	defaultCopyFontFamily: fonts.Franklin_Gothic_Book,
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
		Title: '-2px',
		TitleAlt: '-2px',
		Copy: '-1px',
	},
	lineHeight: {
		Title: '1em',
		Copy: '1em',
		TitleAlt: '1em',
	},
	gradientDegree: '0deg', // Set gradient degree specific to CNSW
	heights: {
		AssetHeight: 1350,
		Header: 230,
		Footer: 120,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'left',
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
