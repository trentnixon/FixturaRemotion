import React from 'react';
import {Series} from 'remotion';

// Components
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CaloundraCCDefaultTitleHub} from '../../../../../structural/assets/common/TitleSequences/CaloundraCCAssetTitles/Default';
import {CaloundraCCWeekendResultMap} from './CaloundraCCWeekendResultMap';

export const WeekendResults = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcher(DATA.DATA, Club.Sponsors);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CaloundraCCDefaultTitleHub />
				<CaloundraCCWeekendResultMap groupedFixtures={groupedFixtures} />
				<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
