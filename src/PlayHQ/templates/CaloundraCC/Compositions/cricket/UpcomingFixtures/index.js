import React from 'react';
import {Series} from 'remotion';

// Components
//import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CaloundraCCDefaultTitleHub} from '../../../../../structural/assets/common/TitleSequences/CaloundraCCAssetTitles/Default';

export const Fixtures = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcherUpcomingFixtures(
		DATA.DATA,
		Club.Sponsors,
		4
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CaloundraCCDefaultTitleHub />
				<FixturesMain groupedFixtures={groupedFixtures} />
				<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
