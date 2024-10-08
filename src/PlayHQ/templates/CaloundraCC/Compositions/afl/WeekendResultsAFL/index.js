import React from 'react';
import {Series} from 'remotion';

// Components
import {BasicDefaultTitle} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';

export const WeekendResultsAFL = (props) => {
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
				<BasicDefaultTitle {...props} />
				<Results {...props} groupedFixtures={groupedFixtures} />

				<DynamicFixtureSponsors {...props} groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
