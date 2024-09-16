import React from 'react';
import {SixersLeagueDefaultTitle} from '../../assets/common/TitleSequences/SixersLeague/Default';
import {CricketSixersOuterMap} from '../../assets/ladder/Builds/SixersLadder/CricketBasicV2OuterMap';
import FooterAccountLogoOnly from '../../Sponsors/body/Upcoming/FooterAccountLogoOnly';

export const CricketSixersLadderBuild = ({groupedSponsors}) => {
	return (
		<>
			<SixersLeagueDefaultTitle />
			<CricketSixersOuterMap />
			<FooterAccountLogoOnly />
		</>
	);
};
