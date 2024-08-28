// TASK import {createTemplateProps} from '../createTemplateProps';

// Function to load fonts
export const loadFonts = async (fontConfig) => {
	const {loadFont, fontOptions} = fontConfig;
	const {waitUntilDone} = loadFont('normal', fontOptions);
	console.log('how many fonts load?', fontOptions);
	await waitUntilDone();
};

// Function to create style props
export const createStyleProps = (
	THEME,
	defaultFontFamily,
	defaultCopyFontFamily,
	fontSizing,
	letterSpacing,
	lineHeight,
	gradientDegree,
	overrides
) => ({
	THEME,
	defaultFontFamily,
	defaultCopyFontFamily,
	fontSizing,
	letterSpacing,
	lineHeight,
	gradientDegree,
	overrides,
});

// Function to get section heights
export const getSectionHeights = (AssetHeight, Header, Footer) => ({
	Header,
	Body: AssetHeight - (Header + Footer),
	Footer,
});

// Function to render template
export const renderTemplate = (TEMPLATES_COMPONENTS, TEMPLATE) => {
	const Component = TEMPLATES_COMPONENTS[TEMPLATE];
	if (!Component) {
		console.error(`No component mapped for template: ${TEMPLATE}`);
		return null;
	}

	if (TEMPLATE === 'Top5BattingList') {
		return <Component TYPE="BATTING" />;
	}
	if (TEMPLATE === 'Top5BowlingList') {
		return <Component TYPE="BOWLING" />;
	}
	return <Component />;
};
