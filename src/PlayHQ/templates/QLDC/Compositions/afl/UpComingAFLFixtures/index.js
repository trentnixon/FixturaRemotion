import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';

export const UpComingAFLFixtures = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const sponsorMatcher = new SponsorMatcherUpcomingFixtures(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors(); 
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<LogoClubTitleHeaderVersion2
				{...props}
				Labels={{
					small: VIDEOMETA.grouping_category,
					large: VIDEOMETA.Video.TitleSplit[0],
				}}
			/>
			<FixturesMain {...props} groupedFixtures={groupedFixtures}/>
			<FixtureSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/>
		</Sequence>
	);
};
