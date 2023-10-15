import {useState} from 'react';

import { Img, continueRender } from "remotion";
export const ImageWithFallback = ({src, fallbackSrc, ...rest}) => {
	const [imageSrc, setImageSrc] = useState(src);

	const handleError = () => {
        continueRender();
		setImageSrc(fallbackSrc);
		
	};

	return <img src={imageSrc} onError={handleError} {...rest} />;
};