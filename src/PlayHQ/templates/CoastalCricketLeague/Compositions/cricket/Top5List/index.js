import React from 'react';
import {Sequence} from 'remotion';

// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {Top5PlayersMap} from './Top5Map';
import SponsorMatcherTop5 from '../../../../../structural/Sponsors/Utils/SponsorMatcherTop5';
import DynamicTop5Sponsors from '../../../../../structural/Sponsors/body/Top5/DynamicTop5Sponsors';

export const Top5List = (props) => { 
	const {FPS_MAIN, VIDEOMETA} = props;
	const sponsorMatcher = new SponsorMatcherTop5(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);
	const groupedSponsors = sponsorMatcher.matchSponsors();

	return ( 
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<LogoClubTitleHeaderVersion2
				{...props}
				Labels={{
					small: VIDEOMETA.Club.Name,
					large: VIDEOMETA.Video.TitleSplit[0], 
				}}
			/> 
			<Top5PlayersMap {...props} /> 
			<DynamicTop5Sponsors {...props} groupedSponsors={groupedSponsors} />
		</Sequence>  
	);
};
