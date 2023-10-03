import { useState, useEffect } from 'react';

const getImageDimensions = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      resolve({ width: this.width, height: this.height });
    };
    img.onerror = function () {
      reject(new Error('Failed to load image'));
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
