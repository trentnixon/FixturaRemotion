import React from 'react';
import {Sequence} from 'remotion';
// Components
import {
	CCLAssetTitle,
	LogoClubTitleHeaderVersion2,
} from '../../../../../structural/assets/common/TitleSequences/CoastalCricketLeague/Default/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';

export const Fixtures = (props) => {
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
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<CCLAssetTitle />
			<FixturesMain groupedFixtures={groupedFixtures} />
			<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
