import React from 'react';
import {CCLAssetTitle} from '../../assets/common/TitleSequences/CoastalCricketLeague/Default/LogoClubTitleHeader';
import {CricketCCLTop5Map} from '../../sport/cricket/Top5/CricketCCLTop5Map';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';

export const CricketCCLTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<CCLAssetTitle />
			<CricketCCLTop5Map groupedSponsors={groupedSponsors} TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
