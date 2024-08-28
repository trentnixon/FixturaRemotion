import fonts from '../../utils/global/init/fonts';
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
		Bold: '900',
		Normal: '400',
		Thin: '200',
	},
};
