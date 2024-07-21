import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/OLD_LogoClubTitleHeader';
import {Results} from './Results';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';

export const WeekendResultsAFL = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const HeaderLabels = {
		small: VIDEOMETA.grouping_category,
		large: VIDEOMETA.Video.TitleSplit[0],
	}; 
	const sponsorMatcher = new SponsorMatcher(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<LogoClubTitleHeaderVersion2 {...props} Labels={HeaderLabels} />
			<Results {...props} groupedFixtures={groupedFixtures} />
			<FixtureSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/> 
		</Sequence> 
	);
};
