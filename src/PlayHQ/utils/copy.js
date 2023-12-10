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
    // Check if 'name' is a string
    if (typeof name !== 'string') {
        console.error('Invalid input: name must be a string');
        return null;
    }

    // Check if 'maxLength' is a number
    if (typeof maxLength !== 'number') {
        console.error('Invalid input: maxLength must be a number');
        return null;
    }

    // Trimming the name to remove extra spaces
    name = name.trim();

    // Check if the name is already within the maximum length
    if (name.length <= maxLength) return name;

    // Split the name into parts
    const nameParts = name.split(/\s+/);

    // Check for single word names
    if (nameParts.length < 2) {
        console.warn('Name is a single word, returning as is even if it exceeds maxLength');
        return name;
    }

    // Construct the shortened name
    try {
        const firstNameInitial = nameParts[0].charAt(0);
        const lastName = nameParts[nameParts.length - 1];

        return `${firstNameInitial}. ${lastName}`;
    } catch (error) {
        console.error('Error processing the name:', error);
        return null;
    }
};
/* export const restrictName = (name, maxLength) => { 
	if (!name || name.length <= maxLength) return name;
  
	const nameParts = name.trim().split(' ');
  
	if (nameParts.length < 2) return name; // Return the original name if it's a single word, even if it's too long
  
	const firstNameInitial = nameParts[0].charAt(0);
	const lastName = nameParts[nameParts.length - 1];
  
	return `${firstNameInitial}. ${lastName}`;
  }; */ 

export  function removeEmojis(str) {
	const regex = /[\u0000-\u007F\u0080-\u00FF\u0100-\u017F\u0180-\u024F\u1E00-\u1EFF]/g;
	return str.match(regex) ? str.match(regex).join('') : '';
  }