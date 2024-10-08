import React from 'react';
import {Series} from 'remotion';

// Components
import {BasicDefaultTitle} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';

export const UpComingAFLFixtures = (props) => {
	const {FPS_MAIN} = props;
	const sponsorMatcher = new SponsorMatcherUpcomingFixtures(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<BasicDefaultTitle {...props} />
				<FixturesMain {...props} groupedFixtures={groupedFixtures} />
				<DynamicFixtureSponsors {...props} groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
