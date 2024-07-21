import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {CCLAssetTitle} from '../../assets/common/TitleSequences/CoastalCricketLeague/Default/LogoClubTitleHeader';
import {CricketCCLLaderOuterMap} from '../../assets/ladder/Builds/CCL/CricketCCLLaderOuterMap';

export const CricketCCLLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<CCLAssetTitle />
			<CricketCCLLaderOuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
