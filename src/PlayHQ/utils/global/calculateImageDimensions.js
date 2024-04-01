// This function remains the same as your provided example
export const calculateImageDimensions = (src, dimensions = [150, 250, 150]) => {
    try {
        const [portraitDimension, landscapeDimension, squareDimension] = dimensions;
        const {width, height} = src;
        const aspectRatio = width / height;

        if (aspectRatio > 1) {
            return {width: `${landscapeDimension}px`, height: 'auto'};
        }
        if (aspectRatio < 1) {
            return {width: 'auto', height: `${portraitDimension}px`};
        }
        return {width: `${squareDimension}px`, height: `${squareDimension}px`};
    } catch (error) {
        console.error('Failed to calculate image dimensions:', error);
        return {width: '100%', height: '100%'}; // Fallback dimensions in case of error
    }
};
