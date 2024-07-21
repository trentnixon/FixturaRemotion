import React from 'react';
import {Series} from 'remotion';
// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';

export const WeekendResults = (props) => {
	const {FPS_MAIN} = props;
	const sponsorMatcher = new SponsorMatcher(
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
				<Results {...props} groupedFixtures={groupedFixtures} />
				<FixtureSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/> 
			</Series.Sequence>
		</Series>
	);
};
