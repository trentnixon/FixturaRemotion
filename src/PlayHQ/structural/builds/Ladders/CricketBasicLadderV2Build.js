import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import { CNSWDefaultTitle } from '../../assets/common/TitleSequences/CNSWAssetTitles/Default';
import { CricketBasicV2OuterMap } from '../../assets/ladder/Builds/BasicLadderV2/CricketBasicV2OuterMap';

export const CricketBasicLadderV2Build = ({groupedSponsors}) => {
	return (
		<>
			<CNSWDefaultTitle />
			<CricketBasicV2OuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
