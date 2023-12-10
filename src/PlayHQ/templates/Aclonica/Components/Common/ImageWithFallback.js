import {useState, useEffect} from 'react';
import {Img, delayRender, continueRender} from 'remotion';

export const ImageWithFallback = ({
	src,
	fallbackSrc = 'https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png', // Default fallback image URL
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
			console.log(newHandle);
			continueRender(newHandle);
		};
		img.src = src;

		return () => {
			if (!imageLoaded && newHandle !== null) {
				continueRender(newHandle);
			}
		};
	}, [src, fallbackSrc]);

	return (
		<Img src={imageSrc} onError={() => setImageSrc(fallbackSrc)} {...rest} />
	);
};
