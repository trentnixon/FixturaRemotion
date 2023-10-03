import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';

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
