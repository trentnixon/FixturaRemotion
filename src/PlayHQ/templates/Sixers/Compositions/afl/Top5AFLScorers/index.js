import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {Top5PlayersMap} from './Top5Map';
import SponsorMatcherTop5 from '../../../../../structural/Sponsors/Utils/SponsorMatcherTop5';
import DynamicTop5Sponsors from '../../../../../structural/Sponsors/body/Top5/DynamicTop5Sponsors';

export const Top5AFLScorers = (props) => {
	const {FPS_MAIN} = props;
	const sponsorMatcher = new SponsorMatcherTop5(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);
	const groupedSponsors = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeader {...props} />
				<Top5PlayersMap {...props} />
				<DynamicTop5Sponsors {...props} groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	); 
}; 
 