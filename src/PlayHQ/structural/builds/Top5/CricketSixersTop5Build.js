import React from 'react';
import {
	SixersLeagueDefaultTitle,
	SixersLeagueTop5Title,
} from '../../assets/common/TitleSequences/SixersLeague/Default';
import {CricketSixersLeagueTop5Map} from '../../sport/cricket/Top5/CricketSixersLeagueTop5Map';
import FooterAccountLogoOnly from '../../Sponsors/body/Upcoming/FooterAccountLogoOnly';

export const CricketSixersTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<SixersLeagueTop5Title />
			<CricketSixersLeagueTop5Map TYPE={TYPE} />
			<FooterAccountLogoOnly />
			{/* <DynamicTop5Sponsors groupedSponsors={groupedSponsors} /> */}
		</>
	);
};
