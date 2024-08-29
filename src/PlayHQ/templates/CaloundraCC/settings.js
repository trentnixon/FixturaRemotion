import fonts from '../../utils/global/init/fonts';
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
