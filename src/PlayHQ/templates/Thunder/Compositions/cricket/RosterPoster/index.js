import React from 'react';
import {Series} from 'remotion';

// Components
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {ThunderRosterMap} from '../../../../../structural/sport/cricket/Rosters/Thunder/ThunderRosterMap';

export const RosterPoster = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<ThunderRosterMap />
			</Series.Sequence>
		</Series>
	);
};
