import { useState, useEffect } from 'react';

const defaultDimensions = { width: 100, height: 100 }; // Default dimensions if the image fails to load

const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve({ width: this.width, height: this.height });
    };
    img.onerror = function () {
      console.warn(`Failed to load image at ${src}, using default dimensions.`);
      resolve(defaultDimensions); // Resolve with default dimensions instead of rejecting
    };
    img.src = src;
  });
};
const calculateDimensions = async (src, dimensions) => {
  try {
    const [portraitDimension, landscapeDimension, squareDimension] = dimensions;
    const { width, height } = await getImageDimensions(src);
    const aspectRatio = width / height;

    if (aspectRatio > 1) {
      // Landscape
      return {
        width: `${landscapeDimension}px`,
        height: 'auto'
      };
    } else if (aspectRatio < 1) {
      // Portrait
      return {
        width: 'auto',
        height: `${portraitDimension}px`
      };
    } else {
      // Square
      return {
        width: `${squareDimension}px`,
        height: `${squareDimension}px`
      };
    }
  } catch (error) {
    console.error(error);
    return { width: 'auto', height: 'auto' }; // Fallback dimensions
  }
};

const useImageDimensions = (src, dimensions = [150, 250, 150]) => {
  const [imgStyles, setImgStyles] = useState({
    width: 'auto',
    height: 'auto'
  });

  useEffect(() => {
    (async () => {
      const calculatedDimensions = await calculateDimensions(src, dimensions);
      setImgStyles(calculatedDimensions);
    })();
  }, [src, dimensions]);

  return imgStyles;
};

export default useImageDimensions;
