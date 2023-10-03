import React from 'react';
import {Series} from 'remotion';

// Components

import {Results} from './Results';
import {LogoClubTitleHeader} from '../../Components/SectionHeader';

export const WeekendResults = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader {...props} />
				<Results {...props} /> 
			</Series.Sequence> 
		</Series> 
	);
};
