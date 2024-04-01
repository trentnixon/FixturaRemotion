import React from 'react';
import {Series} from 'remotion';

// Components
import {Results} from './Results';
import {LogoClubTitleHeaderLimited} from '../../Components/SectionHeader';

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
