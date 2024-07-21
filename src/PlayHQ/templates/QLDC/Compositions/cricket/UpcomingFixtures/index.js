import React from 'react';
import {Sequence} from 'remotion';
// Components
import {FixturesMain} from './Fixtures';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import {QLDCricketAssetTitle} from '../../../../../structural/assets/common/TitleSequences/QLDCricket/Default';
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
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<QLDCricketAssetTitle />
			<FixturesMain groupedFixtures={groupedFixtures} />
			<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
