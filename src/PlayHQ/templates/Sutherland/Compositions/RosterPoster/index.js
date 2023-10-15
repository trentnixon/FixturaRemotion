import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../Components/SectionHeader';
import {Fixture} from './Fixture';

export const RosterPoster = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeaderLimited {...props} />
				<Fixture {...props} fontFamily={'Oswald'}/>
			</Series.Sequence>
		</Series>
	); 
};
