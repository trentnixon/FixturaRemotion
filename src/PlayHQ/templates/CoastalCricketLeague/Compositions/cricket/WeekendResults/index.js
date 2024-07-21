import React from 'react';
import {Sequence} from 'remotion';
// Components
import {CCLAssetTitle} from '../../../../../structural/assets/common/TitleSequences/CoastalCricketLeague/Default/LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';

export const WeekendResults = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcher(DATA.DATA, Club.Sponsors);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<CCLAssetTitle />
			<Results groupedFixtures={groupedFixtures} />
			<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
