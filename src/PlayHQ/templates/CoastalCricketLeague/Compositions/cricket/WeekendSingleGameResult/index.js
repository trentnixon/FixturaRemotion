import React from 'react';
import {Sequence} from 'remotion';

// Components
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CricketCCLSingleFixtureResultBuild} from '../../../../../structural/builds/SingleFixtureResult/CricketCCLSingleFixtureResultBuild';

export const WeekendSingleGameResult = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcher(DATA.DATA, Club.Sponsors, 1);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<CricketCCLSingleFixtureResultBuild
				groupedFixtures={groupedFixtures}
				groupedSponsors={groupedSponsors}
			/>
		</Sequence>
	);
};
