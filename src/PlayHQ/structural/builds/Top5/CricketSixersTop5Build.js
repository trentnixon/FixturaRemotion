import React from 'react';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {SixersLeagueDefaultTitle} from '../../assets/common/TitleSequences/SixersLeague/Default';
import {CricketSixersLeagueTop5Map} from '../../sport/cricket/Top5/CricketSixersLeagueTop5Map';

export const CricketSixersTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<SixersLeagueDefaultTitle />
			<CricketSixersLeagueTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
