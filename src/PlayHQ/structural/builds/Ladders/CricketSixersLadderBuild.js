import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {SixersLeagueDefaultTitle} from '../../assets/common/TitleSequences/SixersLeague/Default';
import {CricketSixersOuterMap} from '../../assets/ladder/Builds/SixersLadder/CricketBasicV2OuterMap';

export const CricketSixersLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<SixersLeagueDefaultTitle />
			<CricketSixersOuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
