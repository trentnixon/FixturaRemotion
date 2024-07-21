import React from 'react';
import {Series} from 'remotion';
// Components
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CricketBasicLadderBuild} from '../../../../../structural/builds/Ladders/CricketBasicLadderBuild';

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
				<CricketBasicLadderBuild groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
