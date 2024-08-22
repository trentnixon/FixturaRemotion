import React from 'react';
import {Series} from 'remotion';

// Components
import {FixturesMain} from './Fixtures';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import {CNSWDefaultTitle} from '../../../../../structural/assets/common/TitleSequences/CNSWAssetTitles/Default';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';

export const Fixtures = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcherUpcomingFixtures(
		DATA.DATA,
		Club.Sponsors
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CNSWDefaultTitle />
				<FixturesMain groupedFixtures={groupedFixtures} />
				<FixtureSponsorsWithAccountLogo groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
