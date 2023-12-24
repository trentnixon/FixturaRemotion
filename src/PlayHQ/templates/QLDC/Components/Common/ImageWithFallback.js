import { useState, useEffect } from 'react';
import { Img, delayRender, continueRender } from 'remotion';

export const ImageWithFallback = ({
  src,
  fallbackSrc = 'https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png',
  maxRetries = 3,
  retryDelay = 500,
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [handle, setHandle] = useState(null);

  const isValidUrl = (urlString) => {
    try {
      new URL(urlString);
      return true;
    } catch (e) {
      return false;
    }
  };

  useEffect(() => {
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

  const handleError = (handle) => {
    console.error(`Failed to load image after ${maxRetries} retries: ${src}`);
    setImageSrc(fallbackSrc); // Set fallback image
    continueRender(handle); 
  };

  return <Img src={imageSrc} onError={() => handleError(handle)} {...rest} />;
};
