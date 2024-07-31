import React from 'react';
import {Series} from 'remotion';

// Components
import {CricketBasicRosterMap} from '../../../../../structural/sport/cricket/Rosters/Basic/CricketBasicRosterMap';
import {useLayoutContext} from '../../../../../context/LayoutContext';

export const RosterPoster = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CricketBasicRosterMap />
			</Series.Sequence>
		</Series>
	);
};