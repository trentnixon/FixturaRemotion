import React from 'react';
import {Sequence} from 'remotion';
// Components
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {CricketQLDCLadderBuild} from '../../../../../structural/builds/Ladders/QLDCLadderBuild';

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
			<CricketQLDCLadderBuild groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
