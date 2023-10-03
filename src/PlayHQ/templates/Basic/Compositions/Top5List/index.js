import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../Components/Header/LogoClubTitleHeader';
import {Top5PlayersMap} from './Top5Map';

export const Top5List = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader {...props} />
				<Top5PlayersMap {...props} /> 
			</Series.Sequence>
		</Series>
	);
};
