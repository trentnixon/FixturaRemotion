import React from 'react';
import {Series} from 'remotion';

// Components
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import { CricketCaloundraCCFixtureResultBuild } from '../../../../../structural/builds/SingleFixtureResult/CricketCaloundraCCFixtureResultBuild';

export const WeekendSingleGameResult = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcher(DATA.DATA, Club.Sponsors, 1);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CricketCaloundraCCFixtureResultBuild
					groupedFixtures={groupedFixtures}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
