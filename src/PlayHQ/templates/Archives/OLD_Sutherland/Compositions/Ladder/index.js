import React from 'react';
import {Series} from 'remotion';
// Components

import {LadderMain} from './LadderMain';
import {LogoClubTitleHeader} from '../../Components/SectionHeader';

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
