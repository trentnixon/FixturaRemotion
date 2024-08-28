import fonts from '../../utils/global/init/fonts';
export const settings = {
	fontConfig: fonts.Slightly_Marker,
	defaultCopyFontFamily: fonts['Resolve-Regular'],
	fontSizing: {
		Title: {
			L: '4em',
			M: '2.5em',
			S: '2em',
		},
		TitleAlt: {
			L: '3em',
			M: '2.5em',
			S: '2em',
		},
		Copy: {
			L: '1.6em',
			M: '1.5em',
			S: '1.1em',
			XS: '0.75em',
		},
	},
	letterSpacing: {
		Title: '0.05em',
		Copy: '0.05em',
		TitleAlt: '0.05em',
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
};
