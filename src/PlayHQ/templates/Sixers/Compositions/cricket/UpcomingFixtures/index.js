import React from 'react';
import {Series} from 'remotion';

// Components
import {FixturesMain} from './Fixtures';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import {SixersLeagueDefaultTitle} from '../../../../../structural/assets/common/TitleSequences/SixersLeague/Default';

import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import FooterAccountLogoOnly from '../../../../../structural/Sponsors/body/Upcoming/FooterAccountLogoOnly';

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
				<SixersLeagueDefaultTitle />
				<FixturesMain groupedFixtures={groupedFixtures} />
				<FooterAccountLogoOnly />
			</Series.Sequence>
		</Series>
	);
};
