import React from 'react';
import {Series} from 'remotion';
// Components
import {LogoClubTitleHeader} from '../../Components/Header/LogoClubTitleHeader';
import {LadderMain} from './LadderMain';

export const Ladder = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader {...props} />
				<LadderMain {...props} />
			</Series.Sequence>
		</Series> 
	);
};
