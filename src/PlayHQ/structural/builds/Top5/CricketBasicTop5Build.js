import React from 'react';
import {CricketBasicTop5Map} from '../../sport/cricket/Top5/CricketBasicTop5Map';
import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {BasicDefaultTitleHub} from '../../assets/common/TitleSequences/BasicAssetTitles/Default';

export const CricketBasicTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<BasicDefaultTitleHub />
			<CricketBasicTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
