import fonts from '../../utils/global/init/fonts';
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