import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';

export const WeekendSingleGameResultAFL = (props) => {
	const {FPS_MAIN} = props;
	props.SectionHeights.Header = 80;
	props.SectionHeights.Body = 1350 - (80 + 120);
	props.SectionHeights.Footer = 120;

	const sponsorMatcher = new SponsorMatcher(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors,
		1 
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeaderLimited {...props} />
				<Results {...props} groupedFixtures={groupedFixtures} />
				<FixtureSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
