import React from 'react';
import {Series} from 'remotion';

// Components
import {BasicWeekendResultMap} from './BasicWeekendResultMap';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {BasicDefaultTitleHub} from '../../../../../structural/assets/common/TitleSequences/BasicAssetTitles/Default';

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
				<BasicDefaultTitleHub />
				<BasicWeekendResultMap groupedFixtures={groupedFixtures} />
				<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
