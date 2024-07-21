import React from 'react';
import {Sequence} from 'remotion';
// Components
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {QLDCricketAssetTitle} from '../../../../../structural/assets/common/TitleSequences/QLDCricket/Default';

export const WeekendResults = () => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_MAIN} = TIMINGS;

	const sponsorMatcher = new SponsorMatcher(DATA.DATA, Club.Sponsors);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<QLDCricketAssetTitle />
			<Results groupedFixtures={groupedFixtures} />
			<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
