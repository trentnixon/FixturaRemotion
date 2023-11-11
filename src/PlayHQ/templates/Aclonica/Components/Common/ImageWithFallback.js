/* import {useState} from 'react';

import { Img, continueRender } from "remotion";
export const ImageWithFallback = ({src, fallbackSrc, ...rest}) => {
	const [imageSrc, setImageSrc] = useState(src);
	fallbackSrc="https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png" // Replace with your fallback image URL
	const handleError = () => {
        continueRender();
		setImageSrc(fallbackSrc);
		
	};

	return <img src={imageSrc} onError={handleError} {...rest} />;
}; */

import { useState, useEffect } from 'react';
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
