import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/OLD_LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import FixtureSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Upcoming/FixtureSponsorsWithAccountLogo';

export const WeekendSingleGameResultAFL = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const HeaderLabels = {
		small: VIDEOMETA.grouping_category,
		large: VIDEOMETA.Video.TitleSplit[0], 
	};
	const sponsorMatcher = new SponsorMatcher(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors,
		1 
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN}  style={{flexDirection: 'column'}}>
				<LogoClubTitleHeaderVersion2 {...props} Labels={HeaderLabels} />
				<Results {...props} groupedFixtures={groupedFixtures}  />
				<FixtureSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
