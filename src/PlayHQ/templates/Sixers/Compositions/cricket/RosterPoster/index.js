import React from 'react';
import {Series} from 'remotion';

// Components
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {SixersRosterMap} from '../../../../../structural/sport/cricket/Rosters/Sixers/SixersRosterMap';

export const RosterPoster = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<SixersRosterMap />
			</Series.Sequence>
		</Series>
	);
};
