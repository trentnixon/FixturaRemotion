import React from 'react';
import {CNSWDefaultTitle} from '../../assets/common/TitleSequences/CNSWAssetTitles/Default';
import {CricketCNSWTop5Map} from '../../sport/cricket/Top5/CricketCNSWTop5Map';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';

export const CricketCNSWTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<CNSWDefaultTitle />
			<CricketCNSWTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
