import React from 'react';
import {Series} from 'remotion';

// Components
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {CricketMUTEDRosterMap} from '../../../../../structural/sport/cricket/Rosters/Muted/CricketMUTEDSRosterMap';

export const RosterPoster = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CricketMUTEDRosterMap />
			</Series.Sequence>
		</Series>
	);
};
