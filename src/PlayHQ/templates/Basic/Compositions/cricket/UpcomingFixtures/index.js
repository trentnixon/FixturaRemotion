import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';

export const Fixtures = (props) => {
	const {FPS_MAIN} = props;

	const sponsorMatcher = new SponsorMatcherUpcomingFixtures(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors,

	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	

	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeader {...props} />
				<FixturesMain {...props} groupedFixtures={groupedFixtures}/>
				 <DynamicFixtureSponsors {...props} groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
