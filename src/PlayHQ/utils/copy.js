// Formatting

export const calculateLetterSpacing = (containerWidth, fontSize, string) => {
	const stringWidth = string.length * fontSize;
	return (containerWidth - stringWidth) / (string.length - 1);
};

export function restrictString(str, maxLength = 20) {
	if (str.length > maxLength) {
		return str.substring(0, maxLength) + '...';
	}
	return str;
}

// these two are the same func
export const splitSocreByRunsAndOvers = (SCORES) => {
	return SCORES.includes('(')
	  ? SCORES.split(' (')
	  : [SCORES, null];
  };
export   const parseScore = (scoreString) => {
	const parts = scoreString.split('(');
	const [score, overs] = [parts[0], parts[1]?.replace(')', '')];

	return { score, overs };
  };



export const restrictName = (name, maxLength) => {
  if (typeof name !== 'string') {
      console.error('Invalid input: name must be a string');
      return null;
  }

  if (typeof maxLength !== 'number') {
      console.error('Invalid input: maxLength must be a number');
      return null;
  }

  // Extract the bracketed part
  const bracketedPart = name.match(/\s\([^\)]+\)$/);
  let nameWithoutBrackets = bracketedPart ? name.replace(bracketedPart[0], '') : name;

  nameWithoutBrackets = nameWithoutBrackets.trim();

  if (nameWithoutBrackets.length <= maxLength) {
      return bracketedPart ? nameWithoutBrackets + bracketedPart[0] : nameWithoutBrackets;
  }

  const nameParts = nameWithoutBrackets.split(/\s+/);

  if (nameParts.length < 2) {
      console.warn('Name is a single word, returning as is even if it exceeds maxLength');
      return nameWithoutBrackets + (bracketedPart ? bracketedPart[0] : '');
  }

  try {
      const firstNameInitial = nameParts[0].charAt(0);
      const lastName = nameParts[nameParts.length - 1];
      let shortenedName = `${firstNameInitial}. ${lastName}`;

      // Append the bracketed part if it exists
      if (bracketedPart) {
          shortenedName += bracketedPart[0];
      }

      return shortenedName;
  } catch (error) {
      console.error('Error processing the name:', error);
      return null;
  }
};


export  function removeEmojis(str) {
	const regex = /[\u0000-\u007F\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]/g;
	return str.match(regex) ? str.match(regex).join('') : '';
  }


  export const capitalizeFirstLetterOfName = (string) => {
    return string
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
};

// deconstructuring the Font OBJ

// settingsUtils.js

// Get font labels
export const getFontLabels = ({ Font: { Label, CopyLabel } }) => ({ Label, CopyLabel });
/*
Example usage:
const { Label, CopyLabel } = getFontLabels(settings);
console.log(Label);       // 'Gloss_And_Bloom'
console.log(CopyLabel);   // 'MonumentExtended'
*/

// Get font family and weight for Titles
export const getTitleFont = ({ Font: { Title } }) => Title;
/*
Example usage:
const titleFont = getTitleFont(settings);
console.log(titleFont.fontFamily);  // 'Gloss_And_Bloom'
console.log(titleFont.fontWeight);  // 900
*/

// Get font family and weight for alternative Titles
export const getTitleAltFont = ({ Font: { TitleAlt } }) => TitleAlt;
/*
Example usage:
const titleAltFont = getTitleAltFont(settings);
console.log(titleAltFont.fontFamily);  // 'Gloss_And_Bloom'
console.log(titleAltFont.fontWeight);  // 400
*/

// Get font family and weight for Copy
export const getCopyFont = ({ Font: { Copy } }) => Copy;
/*
Example usage:
const copyFont = getCopyFont(settings);
console.log(copyFont.fontFamily);  // 'MonumentExtended'
console.log(copyFont.fontWeight);  // 400
*/

// Get font sizing for all categories (Title, TitleAlt, Copy)
export const getFontSizing = ({ Font: { fontSizing: { Title, TitleAlt, Copy } } }) => ({ Title, TitleAlt, Copy });
/*
Example usage:
const { Title, TitleAlt, Copy } = getFontSizing(settings);
console.log(Title.L);  // '3em'
console.log(Copy.XS);  // '0.75em'
*/

// Get letter spacing values
export const getLetterSpacing = ({ Font: { letterSpacing: { Title, Copy, TitleAlt } } }) => ({ Title, Copy, TitleAlt });
/*
Example usage:
const { Title, Copy, TitleAlt } = getLetterSpacing(settings);
console.log(Title);  // '0.05em'
console.log(Copy);   // '0.05em'
*/

// Get line height values
export const getLineHeight = ({ Font: { lineHeight: { Title, Copy, TitleAlt } } }) => ({ Title, Copy, TitleAlt });
/*
Example usage:
const { Title, Copy, TitleAlt } = getLineHeight(settings);
console.log(Title);  // '1em'
console.log(Copy);   // '1em'
*/

// Get primary color settings
export const getPrimaryColor = ({ Color: { Primary } }) => Primary;
/*
Example usage:
const primaryColor = getPrimaryColor(settings);
console.log(primaryColor.Main);  // '#84FF19'
console.log(primaryColor.Darken);  // '#6be500'
*/

// Get secondary color settings
export const getSecondaryColor = ({ Color: { Secondary } }) => Secondary;
/*
Example usage:
const secondaryColor = getSecondaryColor(settings);
console.log(secondaryColor.Main);  // '#009300'
console.log(secondaryColor.Lighten);  // '#00c600'
*/

// Get background color and gradient
export const getBackgroundSettings = ({ Color: { Background: { Color, Gradient } } }) => ({ Color, Gradient });
/*
Example usage:
const backgroundSettings = getBackgroundSettings(settings);
console.log(backgroundSettings.Color);  // '#d9d9d9'
console.log(backgroundSettings.Gradient);  // 'linear-gradient(0deg, #006000, #84FF19, #84FF19, #00c600)'
*/

// Get QLDC gradient
export const getQLDCGradient = ({ Color: { Background: { Gradients: { QLDC } } } }) => QLDC;
/*
Example usage:
const qldcGradient = getQLDCGradient(settings);
console.log(qldcGradient);  // 'linear-gradient(0deg, #479800, #9fff4c)'
*/

// Get dual-tone gradients by orientation
export const getDualToneGradients = ({ Color: { Background: { Gradients: { DualTone } } } }) => DualTone;
/*
Example usage:
const dualToneGradients = getDualToneGradients(settings);
console.log(dualToneGradients.Horizontal.Primary);  // 'linear-gradient(90deg, #84FF19, #009300)'
console.log(dualToneGradients.Vertical.Secondary);  // 'linear-gradient(0deg, #009300, #84FF19)'
*/

// Get tri-tone gradients by orientation
export const getTriToneGradients = ({ Color: { Background: { Gradients: { TriTone } } } }) => TriTone;
/*
Example usage:
const triToneGradients = getTriToneGradients(settings);
console.log(triToneGradients.Horizontal.Primary);  // 'linear-gradient(90deg, #84FF19, #009300, #84FF19)'
console.log(triToneGradients.Vertical.SecondaryDark);  // 'linear-gradient(0deg, #009300, #006000, #009300)'
*/

// Get inverse background settings
export const getInverseBackground = ({ Color: { Background: { Inverse } } }) => Inverse;
/*
Example usage:
const inverseBackground = getInverseBackground(settings);
console.log(inverseBackground.Color);  // '#d9d9d9'
console.log(inverseBackground.Gradient);  // 'linear-gradient(0deg, #6be500, #009300, #009300, #9fff4c)'
*/

// Get opposite background settings
export const getOppositeBackground = ({ Color: { Background: { Opposite } } }) => Opposite;
/*
Example usage:
const oppositeBackground = getOppositeBackground(settings);
console.log(oppositeBackground.PrimaryAsSecondary);  // 'linear-gradient(0deg, #009300, #84FF19)'
*/

// Get all values
export const getAllValues = (settings) => settings;
/*
Example usage:
const allValues = getAllValues(settings);
console.log(allValues);
*/
