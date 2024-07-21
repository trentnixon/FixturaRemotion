import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {CCLAssetTitle} from '../../assets/common/TitleSequences/CoastalCricketLeague/Default/LogoClubTitleHeader';
import {CCLSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/CCLSingleFixtureResult/CCLSingleFixtureResultMap';

export const CricketCCLSingleFixtureResultBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<CCLAssetTitle />
			<CCLSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
