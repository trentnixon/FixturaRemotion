import React from 'react';
import {Sequence} from 'remotion';
// Components
import {Fixture} from './Fixture';
export const RosterPoster = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<Fixture {...props} />
		</Sequence> 
	);
};
