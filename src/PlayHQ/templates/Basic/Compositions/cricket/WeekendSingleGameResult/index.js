import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicSingleResultSponsors from '../../../../../structural/Sponsors/body/SingleResults/DynamicSingleResultSponsors';

export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	const sponsorMatcher = new SponsorMatcher(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors,
		1
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	console.log(groupedFixtures, groupedSponsors);
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
				<LogoClubTitleHeaderLimited {...props} />
				<Results {...props} groupedFixtures={groupedFixtures}/>
				<DynamicSingleResultSponsors {...props} groupedSponsors={groupedSponsors} /> 
			</Series.Sequence>
		</Series>
	);
};
  