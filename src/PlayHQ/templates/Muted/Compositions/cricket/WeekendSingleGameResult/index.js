import React from 'react';
import {Series} from 'remotion';

// Components
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CricketMutedFixtureResultsBuild} from '../../../../../structural/builds/SingleFixtureResult/CricketMutedFixtureResultsBuild';

export const WeekendSingleGameResult = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcher(DATA.DATA, Club.Sponsors, 1);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return (
		<Series layout="none">
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column', position: 'relative'}}
			>
				<CricketMutedFixtureResultsBuild
					groupedFixtures={groupedFixtures}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
