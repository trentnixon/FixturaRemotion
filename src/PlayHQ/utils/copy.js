
// Formatting

export const calculateLetterSpacing = (containerWidth, fontSize, string) => {
	const stringWidth = string.length * fontSize;
	return (containerWidth - stringWidth) / (string.length - 1);
};


export function restrictString(str, maxLength=20) {
	if (str.length > maxLength) {
		return str.substring(0, maxLength) + '...';
	} 
		return str;
	
}
