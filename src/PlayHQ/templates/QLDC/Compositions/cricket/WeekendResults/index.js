import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicFixtureSponsors from '../../../../../structural/Sponsors/body/Upcoming/DynamicFixtureSponsors';

export const WeekendResults = (props) => {
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
			<DynamicFixtureSponsors {...props} groupedSponsors={groupedSponsors} />
		</Sequence>
	); 
};
