import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {ThunderLeagueDefaultTitle} from '../../assets/common/TitleSequences/ThunderLeague/Default';
import {CricketThunderOuterMap} from '../../assets/ladder/Builds/ThunderLadder/CricketBasicV2OuterMap';

export const CricketThunderLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<ThunderLeagueDefaultTitle />
			<CricketThunderOuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
