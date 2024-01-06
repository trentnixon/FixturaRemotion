import React from 'react';
import {Sequence} from 'remotion';

// Components
import {Results} from './Results';

export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<Results {...props} />
		</Sequence> 
	); 
};
