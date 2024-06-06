import {useState} from 'react';
import {Img, continueRender, delayRender} from 'remotion';

export const ImageWithFallback = ({
	src,
	fallbackSrc = 'https://fixtura.s3.ap-southeast-2.amazonaws.com/Default_ICON_171b58a21b.png',
	maxRetries = 3,
	...rest
}) => {
	const [imageSrc, setImageSrc] = useState(src);
	const [handle] = useState(() => delayRender());

	const handleError = (handle) => {
		console.error(`Failed to load image after ${maxRetries} retries: ${src}`);
		setImageSrc(fallbackSrc); // Set fallback image
		continueRender(handle); 
	};
	continueRender(handle);
	return (
		<Img
			src={imageSrc?.url || fallbackSrc}
			onError={() => handleError(handle)}
			{...rest}
		/>
	);
};
