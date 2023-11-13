import { useState, useEffect } from 'react';
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


/* import { useState, useEffect } from 'react';
import { Img, delayRender, continueRender } from "remotion";

export const ImageWithFallback = ({
  src,
  fallbackSrc = "https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png", // Default fallback image URL
  ...rest
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [handle, setHandle] = useState(null);

  useEffect(() => {
    const newHandle = delayRender();
    setHandle(newHandle);

    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
      continueRender(newHandle);
    };
    img.onerror = () => {
      setImageSrc(fallbackSrc);
      setImageLoaded(false);
      continueRender(newHandle);
    };
    img.src = src;

    return () => {
      if (!imageLoaded) {
        continueRender(newHandle);
      }
    };
  }, [src, fallbackSrc]);

  return <img src={imageSrc} onError={() => setImageSrc(fallbackSrc)} {...rest} />;
};
 */