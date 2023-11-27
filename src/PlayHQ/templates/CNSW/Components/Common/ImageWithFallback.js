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
    if(newHandle !== null){
      console.log(newHandle)
      //setHandle(newHandle);
    }
   

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
          handleError();
        }
      };
      img.src = url;
    };

    loadImage(src, 0);

    return () => {
      if (handle !== null) {
        continueRender(handle);
      }
    };
  }, [src, fallbackSrc, handle, maxRetries, retryDelay]);

  const handleError = () => {
    console.error(`Failed to load image after ${maxRetries} retries: ${src}`);
    setImageSrc(fallbackSrc); // Set fallback image
    continueRender(handle);
  };

  return <Img src={imageSrc} onError={handleError} {...rest} />;
};



/* import { useState, useEffect } from 'react';
import { Img, delayRender, continueRender } from 'remotion';

export const ImageWithFallback = ({
  src,
  fallbackSrc = 'https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png', // Default fallback image URL
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [handle, setHandle] = useState(null);

  useEffect(() => {
    const newHandle = delayRender();
    setHandle(newHandle);

    const img = new Image();
    img.onload = () => {
      setImageSrc(src);
      continueRender(newHandle);
    };
    img.onerror = () => {
      setImageSrc(fallbackSrc);
      continueRender(newHandle);
    };
    img.src = src;

    // Cleanup function
    return () => {
      continueRender(newHandle);
    };
  }, [src, fallbackSrc]);

  return <Img src={imageSrc} {...rest} />;
};
 */
