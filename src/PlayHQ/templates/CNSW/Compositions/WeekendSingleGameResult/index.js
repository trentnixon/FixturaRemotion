import React from 'react';
import {Series} from 'remotion';

// Components
import {Results} from './Results';

export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<Results {...props} />
			</Series.Sequence>
		</Series>
	);
};
