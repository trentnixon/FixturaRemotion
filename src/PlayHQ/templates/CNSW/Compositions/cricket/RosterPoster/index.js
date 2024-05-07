import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../Components/Header/LogoClubTitleHeader';
import {Fixture} from './Fixture';

export const RosterPoster = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<Fixture {...props} />
			</Series.Sequence>
		</Series>
	);
};
/* <LogoClubTitleHeaderLimited {...props} /> */
