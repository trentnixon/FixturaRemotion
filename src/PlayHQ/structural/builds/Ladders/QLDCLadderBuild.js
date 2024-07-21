import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {QLDCricketAssetTitle} from '../../assets/common/TitleSequences/QLDCricket/Default';
import {CricketQLDCV2OuterMap} from '../../assets/ladder/Builds/QLDLadder/CricketQLDCV2OuterMap';

export const CricketQLDCLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<QLDCricketAssetTitle />
			<CricketQLDCV2OuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
