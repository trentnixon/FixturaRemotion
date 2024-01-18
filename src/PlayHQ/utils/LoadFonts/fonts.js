// fonts.js

import {staticFile} from 'remotion';

const templateFonts = {
	Basic: {
		Fonts: ['Heebo-Bold.ttf', 'Heebo-Black.ttf'],
		Folder: 'Heebo/static/',
		Label: 'Heebo',
	},
	CNSW: {
		Fonts: ['Roboto-Black.ttf', 'Roboto-Regular.ttf'],
		Folder: 'Roboto/',
		Label: 'Roboto',
	},
};

export const loadLocalFonts = (template) => {
	console.log(`Load Font For ${template}`);
	// Get the fonts for the current template or default to an empty array
	const Fonts = templateFonts[template] || [];
	const FontLoadLength = Fonts.Fonts.length;
	// If there are no fonts to load for this template, resolve immediately
	if (FontLoadLength === 0) {
		return Promise.resolve();
	}

	let fontsLoaded = 0;
	return new Promise((resolve) => {
		Fonts.Fonts.forEach((fontFile) => {
			const font = new FontFace(
				Fonts.Label,
				/* `url('${PATH}${Fonts.Folder}${fontFile}') format('truetype')` */
				`url('${staticFile(
					`fonts/${Fonts.Folder}${fontFile}`
				)}') format('truetype')`
			);
			font
				.load()
				.then(() => {
					document.fonts.add(font);
					console.log(
						`FONT CHECK! ${Fonts.Label} font ${fontFile} loaded for ${template}`
					);
				})
				.catch((err) => {
					console.error(
						`FONT CHECK! Error loading ${Fonts.Label} font ${fontFile} for ${template}:`,
						err
					);
				})
				.finally(() => {
					fontsLoaded++;
					console.log('FONT CHECK! ', fontsLoaded, FontLoadLength);
					console.log('FONT CHECK!', fontsLoaded === FontLoadLength);
					if (fontsLoaded === FontLoadLength) {
						console.log(
							`FONT CHECK! ALL fonts loaded lets resolve this back to the Root!`
						);
						resolve();
					}
				});
		});
	});
};
