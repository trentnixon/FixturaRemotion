export  const getDynamicFontSize = (text) => {
    if (text?.length <= 10) return "9em";      // Short strings
    if (text?.length <= 20) return "7em"; // Medium strings
    return "5em";                        // Long strings
};