import React from 'react';
import {Series} from 'remotion';

// Components 
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';

export const UpComingNetBallFixtures = (props) => {
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
				<LogoClubTitleHeader {...props} />
				<FixturesMain {...props} groupedFixtures={groupedFixtures} />
				<FixtureSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
