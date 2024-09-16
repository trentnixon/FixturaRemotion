import React from 'react';
import {BasicDefaultTitle} from '../../../templates/Basic/Components/Header/LogoClubTitleHeader';
import {CricketBasicOuterMap} from '../../assets/ladder/Builds/BasicLadder/CricketBasicOuterMap';
import DynamicLadderSponsors from '../../Sponsors/body/Ladder/DynamicLadderSponsors';
import {BasicDefaultTitleHub} from '../../assets/common/TitleSequences/BasicAssetTitles/Default';

export const CricketBasicLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<BasicDefaultTitleHub />
			<CricketBasicOuterMap />
			<DynamicLadderSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
