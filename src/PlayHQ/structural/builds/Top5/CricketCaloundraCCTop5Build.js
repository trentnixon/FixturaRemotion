import React from 'react';

import DynamicTop5Sponsors from '../../Sponsors/body/Top5/DynamicTop5Sponsors';
import {CaloundraCCDefaultTitleHub} from '../../assets/common/TitleSequences/CaloundraCCAssetTitles/Default';
import {CricketCaloundraCCTop5Map} from '../../sport/cricket/Top5/CricketCaloundraCCTop5Map';

export const CricketCaloundraCCTop5Build = ({TYPE, groupedSponsors}) => {
	return (
		<>
			<CaloundraCCDefaultTitleHub />
			<CricketCaloundraCCTop5Map TYPE={TYPE} />
			<DynamicTop5Sponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
