import React from 'react';
import {Series} from 'remotion';
// Components
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {CNSWREALDefaultTitle} from '../../../../../structural/assets/common/TitleSequences/CNSWREALAssetTitles/Default';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';

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
				<CNSWREALDefaultTitle />
				<Results groupedFixtures={groupedFixtures} />
				<DynamicFixtureSponsors groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
