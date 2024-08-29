import fonts from '../../utils/global/init/fonts';
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
};
