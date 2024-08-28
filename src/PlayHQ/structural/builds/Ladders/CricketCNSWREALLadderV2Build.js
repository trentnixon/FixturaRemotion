import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {CricketBasicV2OuterMap} from '../../assets/ladder/Builds/BasicLadderV2/CricketBasicV2OuterMap';
import {CNSWREALDefaultTitle} from '../../assets/common/TitleSequences/CNSWREALAssetTitles/Default';

export const CricketCNSWREALLadderV2Build = ({groupedSponsors}) => {
	return (
		<>
			<CNSWREALDefaultTitle />
			<CricketBasicV2OuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
