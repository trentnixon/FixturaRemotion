import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';

export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeaderLimited {...props} />
				<Results {...props} /> 
			</Series.Sequence>
		</Series>
	);
};
