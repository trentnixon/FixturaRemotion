import React from 'react';
import {NoiseComp} from './niose3D'; // Adjust the import path as needed
// import {useStylesContext} from '../../../context/StyleContext';

const CreateNoiseBackground = () => {
	//const {BuildProps} = useStylesContext();
	//const {BackgroundStyles} = BuildProps ?? {};

	return (
		<div
			style={{
				backgroundColor: 'white',
				height: '100%',
				width: '100%',
			}}
		>
			<NoiseComp speed={0.015} circleRadius={5} maxOffset={60} />
		</div>
	);
};

export default CreateNoiseBackground;
