import React from 'react';
import {CricketCNSWTop5Map} from '../../sport/cricket/Top5/CricketCNSWTop5Map';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {CNSWREALDefaultTitle} from '../../assets/common/TitleSequences/CNSWREALAssetTitles/Default';

export const CricketCNSWTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<CNSWREALDefaultTitle />
			<CricketCNSWTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
