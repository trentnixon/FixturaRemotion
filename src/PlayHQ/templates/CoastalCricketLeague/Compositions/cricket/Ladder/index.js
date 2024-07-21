import React from 'react';
import {Sequence} from 'remotion';
// Components
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CricketCCLLadderBuild} from '../../../../../structural/builds/Ladders/CricketCCLLadderBuild';

export const Ladder = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const sponsorMatcher = new SponsorMatcherLadders(DATA.DATA, Club.Sponsors);
	const groupedSponsors = sponsorMatcher.matchSponsors();
	return (
		<Sequence
			durationInFrames={TIMINGS.FPS_MAIN}
			style={{flexDirection: 'column'}}
		>
			<CricketCCLLadderBuild groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
