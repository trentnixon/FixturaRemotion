import React from 'react';
import {Series} from 'remotion';
// Components
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CricketBasicLadderV2Build} from '../../../../../structural/builds/Ladders/CricketBasicLadderV2Build';
import { CricketCNSWREALLadderV2Build } from '../../../../../structural/builds/Ladders/CricketCNSWREALLadderV2Build';

export const Ladder = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const sponsorMatcher = new SponsorMatcherLadders(DATA.DATA, Club.Sponsors);
	const groupedSponsors = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence
				durationInFrames={TIMINGS.FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CricketCNSWREALLadderV2Build groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
