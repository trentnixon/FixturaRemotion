// Formatting

export const calculateLetterSpacing = (containerWidth, fontSize, string) => {
	const stringWidth = string.length * fontSize;
	return (containerWidth - stringWidth) / (string.length - 1);
};

export function restrictString(str, maxLength = 20) {
	if (typeof str !== 'string') {
		console.error('Invalid input: str must be a string');
		return null;
	}
	if (!str.length) {
		return str;
	}
	if (str.length > maxLength) {
		return str.substring(0, maxLength) + '...';
	}
	return str;
}

// these two are the same func
export const splitSocreByRunsAndOvers = (SCORES) => {
	return SCORES.includes('(') ? SCORES.split(' (') : [SCORES, null];
};
export const parseScore = (scoreString) => {
	const parts = scoreString.split('(');
	const [score, overs] = [parts[0], parts[1]?.replace(')', '')];

	return {score, overs};
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
	let nameWithoutBrackets = bracketedPart
		? name.replace(bracketedPart[0], '')
		: name;

	nameWithoutBrackets = nameWithoutBrackets.trim();

	if (nameWithoutBrackets.length <= maxLength) {
		return bracketedPart
			? nameWithoutBrackets + bracketedPart[0]
			: nameWithoutBrackets;
	}

	const nameParts = nameWithoutBrackets.split(/\s+/);

	if (nameParts.length < 2) {
		console.warn(
			'Name is a single word, returning as is even if it exceeds maxLength'
		);
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
		return '';
	}
};

export function removeEmojis(str) {
	const regex =
		/[\u0000-\u007F\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]/g;
	return str.match(regex) ? str.match(regex).join('') : '';
}

export const capitalizeFirstLetterOfName = (string) => {
	if (!string) return '';
	return string
		.toLowerCase()
		.split(' ')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};
