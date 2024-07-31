import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {CaloundraCCDefaultTitleHub} from '../../assets/common/TitleSequences/CaloundraCCAssetTitles/Default';
import { CricketCaloundraCCV2OuterMap } from '../../assets/ladder/Builds/CaloundraCCLadder/CricketCaloundraCCV2OuterMap';

export const CricketCaloundraCCLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<CaloundraCCDefaultTitleHub />
			<CricketCaloundraCCV2OuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
