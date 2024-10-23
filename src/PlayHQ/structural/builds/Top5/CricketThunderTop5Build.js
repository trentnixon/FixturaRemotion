import React from 'react';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {ThunderLeagueTop5Title} from '../../assets/common/TitleSequences/ThunderLeague/Default';
import {CricketThunderLeagueTop5Map} from '../../sport/cricket/Top5/CricketThunderLeagueTop5Map';

export const CricketThunderTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<ThunderLeagueTop5Title />
			<CricketThunderLeagueTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
