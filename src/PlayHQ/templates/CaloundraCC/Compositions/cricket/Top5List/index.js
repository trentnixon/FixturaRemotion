import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {Top5PlayersMap} from './Top5Map';
import DynamicTop5Sponsors from '../../../../../structural/Sponsors/body/Top5/DynamicTop5Sponsors';
import SponsorMatcherTop5 from '../../../../../structural/Sponsors/Utils/SponsorMatcherTop5';

export const Top5List = (props) => {
	const {FPS_MAIN} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};

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
				<Top5PlayersMap {...props} StyleConfig={StyleConfig} />
				<DynamicTop5Sponsors {...props} groupedSponsors={groupedSponsors} />
			</Series.Sequence>
		</Series>
	);
};
