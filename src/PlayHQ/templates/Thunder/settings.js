import fonts from '../../utils/global/init/fonts';

export const settings = {
	fontConfig: fonts.Gloss_And_Bloom,
	defaultCopyFontFamily: fonts.MonumentExtended,
	fontSizing: {
		Title: {
			L: '7em',
			M: '5.5em',
			S: '4em',
		},
		TitleAlt: {
			XL: '3.5em',
			L: '3em',
			M: '2.5em',
			S: '2em',
		},
		Copy: {
			XL: '2.5em',
			L: '1.5em',
			M: '1.35em',
			S: '0.95em',
			XS: '0.7em',
		},
	},
	letterSpacing: {
		Title: '0.05em',
		Copy: '0.15em',
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
		alignSponsors: 'right',
	},
};
