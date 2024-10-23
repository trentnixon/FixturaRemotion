import React from 'react';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {MutedLeagueDefaultTitle} from '../../assets/common/TitleSequences/Muted/Default';
import {CricketMutedLeagueTop5Map} from '../../sport/cricket/Top5/CricketMutedLeagueTop5Map';

export const CricketMutedTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<MutedLeagueDefaultTitle />
			<CricketMutedLeagueTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
