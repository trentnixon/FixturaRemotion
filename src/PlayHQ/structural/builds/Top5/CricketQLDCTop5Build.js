import React from 'react';
import {QLDCricketAssetTitle} from '../../assets/common/TitleSequences/QLDCricket/Default';
import {CricketQLDCTop5Map} from '../../sport/cricket/Top5/CricketQLDCTop5Map';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';

export const CricketQLDCTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<QLDCricketAssetTitle />
			<CricketQLDCTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
