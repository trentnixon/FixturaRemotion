import React from 'react';
import {BasicDefaultTitle} from '../../../templates/Basic/Components/Header/LogoClubTitleHeader';
import {CricketBasicOuterMap} from '../../assets/ladder/Builds/BasicLadder/CricketBasicOuterMap';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';

export const CricketBasicLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<BasicDefaultTitle />
			<CricketBasicOuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
