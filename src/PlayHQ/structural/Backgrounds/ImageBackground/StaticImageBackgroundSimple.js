import React from 'react';
/* import {useCurrentFrame} from 'remotion';
import {landscapeAnimation} from './landscapeAnimation';
import {portraitAnimation} from './portraitAnimation'; */
import {useStylesContext} from '../../../context/StyleContext';
/* import {useLayoutContext} from '../../../context/LayoutContext';
import {preloadImage} from '@remotion/preload'; */
import {BGImage} from '../UI/Image';

const StaticImageBackgroundSimple = () => {
	const {BuildProps} = useStylesContext();

	const {TemplateVariation} = BuildProps ?? {};

	console.log('TemplateVariation ', TemplateVariation);

	return (
		<div>
			<BGImage url={TemplateVariation.useBackground} /*  style={ImgStyles} */ />
		</div>
	);
};

export default StaticImageBackgroundSimple;
