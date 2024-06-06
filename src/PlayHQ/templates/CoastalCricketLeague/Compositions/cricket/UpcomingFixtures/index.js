import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import SponsorMatcherUpcomingFixtures from '../../../../../structural/Sponsors/Utils/SponsorMatcherUpcomingFixtures';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';

export const Fixtures = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const sponsorMatcher = new SponsorMatcherUpcomingFixtures(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors,
		4
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<LogoClubTitleHeaderVersion2
				{...props}
				Labels={{
					small: VIDEOMETA.Club.Name,
					large: VIDEOMETA.Video.TitleSplit[0],
				}}
			/>
			<FixturesMain {...props} groupedFixtures={groupedFixtures} />
			<DynamicFixtureSponsors {...props} groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
