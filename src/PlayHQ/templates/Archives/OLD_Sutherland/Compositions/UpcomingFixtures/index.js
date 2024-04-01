import React from 'react';
import {Series} from 'remotion';
// Components
import {FixturesMain} from './Fixtures';
import {LogoClubTitleHeader} from '../../Components/SectionHeader';
export const Fixtures = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader {...props} />
				<FixturesMain {...props} />
			</Series.Sequence> 
		</Series> 
	);
};
