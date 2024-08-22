import React from 'react';
/* Import {useCurrentFrame} from 'remotion';
import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation'; */
import {useStylesContext} from '../../../context/StyleContext';
/* Import {useLayoutContext} from '../../../context/LayoutContext';
import {preloadImage} from '@remotion/preload'; */
import {BGImage} from '../UI/Image';

const StaticImageBackgroundSimple = () => {
	const {BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps ?? {};

	return (
		<div>
			<BGImage url={TemplateVariation.useBackground} /*  style={ImgStyles} */ />
		</div>
	);
};

export default StaticImageBackgroundSimple;
