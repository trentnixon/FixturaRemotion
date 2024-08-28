import fonts from '../../utils/global/init/fonts';
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
			M: test || '4.5em',
			S: test || '2em',
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
		Bold: '900',
		Semi: '600',
		Normal: '400',
		Thin: '200',
	},
};
