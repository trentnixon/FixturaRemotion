import React from 'react';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {CricketSixersLeagueTop5Map} from '../../sport/cricket/Top5/CricketSixersLeagueTop5Map';
import {ThunderLeagueDefaultTitle} from '../../assets/common/TitleSequences/ThunderLeague/Default';

export const CricketThunderTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<ThunderLeagueDefaultTitle />
			<CricketSixersLeagueTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
