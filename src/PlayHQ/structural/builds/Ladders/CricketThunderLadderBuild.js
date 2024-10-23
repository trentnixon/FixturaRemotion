import React from 'react';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {MutedLeagueDefaultTitle} from '../../assets/common/TitleSequences/Muted/Default';
import {CricketMutedOuterMap} from '../../assets/ladder/Builds/MutedLadder/CricketBasicV2OuterMap';

export const CricketThunderLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<MutedLeagueDefaultTitle />
			<CricketMutedOuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
