import React from 'react';
import {Series} from 'remotion';

// Components
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {CricketCNSWSRosterMap} from '../../../../../structural/sport/cricket/Rosters/CNSW/CricketCNSWSRosterMap';

export const RosterPoster = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CricketCNSWSRosterMap />
			</Series.Sequence>
		</Series>
	);
};
