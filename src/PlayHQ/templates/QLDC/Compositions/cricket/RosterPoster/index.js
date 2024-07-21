import React from 'react';
import {Sequence} from 'remotion';
// Components
import {CricketQLDCSRosterMap} from '../../../../../structural/sport/cricket/Rosters/QLDC/CricketQLDCSRosterMap';
import {useLayoutContext} from '../../../../../context/LayoutContext';
export const RosterPoster = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_MAIN} = TIMINGS;
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<CricketQLDCSRosterMap />
		</Sequence>
	);
};
