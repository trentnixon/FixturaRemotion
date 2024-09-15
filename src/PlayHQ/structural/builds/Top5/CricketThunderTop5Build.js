import React from 'react';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {ThunderLeagueDefaultTitle} from '../../assets/common/TitleSequences/ThunderLeague/Default';
import {CricketThunderLeagueTop5Map} from '../../sport/cricket/Top5/CricketThunderLeagueTop5Map';

export const CricketThunderTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<ThunderLeagueDefaultTitle />
			<CricketThunderLeagueTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
