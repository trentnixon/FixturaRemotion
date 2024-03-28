import { useState } from 'react';
import { Img, continueRender } from 'remotion';

export const ImageWithFallback = ({
  src,
  fallbackSrc = 'https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png',
  maxRetries = 3,
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [handle] = useState(null);

  const handleError = (handle) => {
    console.error(`Failed to load image after ${maxRetries} retries: ${src}`);
    setImageSrc(fallbackSrc); // Set fallback image
    continueRender(handle); 
  }; 

  return <Img src={imageSrc?.url || fallbackSrc} onError={() => handleError(handle)} {...rest} />;
};


/* 
  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
    console.log("ImageWithFallback")
    const newHandle = delayRender();
    setHandle(newHandle);

    const loadImage = (url, attempt) => {
      if (!isValidUrl(url)) {
        console.error(`Invalid URL: ${url}`);
        setImageSrc(fallbackSrc);
        continueRender(newHandle);
        return;
      }

      const img = new Image();
      img.onload = () => {
        setImageSrc(url);
        continueRender(newHandle);
      };
      img.onerror = () => {
        if (attempt < maxRetries) {
          setTimeout(() => loadImage(url, attempt + 1), retryDelay);
        } else {
          handleError(newHandle);
        }
      };
      img.src = url;
    };

    loadImage(src, 0);

    return () => {
      if (newHandle !== null) {
        continueRender(newHandle);
      }
    };
  }, [src, fallbackSrc, maxRetries, retryDelay]);
*/