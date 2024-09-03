import fonts from '../../utils/global/init/fonts';
const test = false; // '0em';
export const settings = {
	fontConfig: fonts.MonumentExtended,
	defaultCopyFontFamily: fonts.Tungsten,
	fontSizing: {
		Title: {
			L: test || '7em',
			M: test || '6.5em',
			S: test || '4em',
		},
		TitleAlt: {
			XL: test || '3.5em',
			L: test || '3em',
			M: test || '2.5em',
			S: test || '2em',
		},
		Copy: {
			XL: test || '3.5em',
			L: test || '3.5em',
			M: test || '2.5em',
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
		AssetHeight: 1350,
		Header: 230,
		Footer: 120,
	},
	SponsorPositionAndAnimations: {
		animationType: 'FromTop',
		alignSponsors: 'right',
	},
};
