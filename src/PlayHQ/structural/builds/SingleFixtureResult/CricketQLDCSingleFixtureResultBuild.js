import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {QLDCricketAssetTitle} from '../../assets/common/TitleSequences/QLDCricket/Default';
import {QLDCSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/QLDCSingleFixtureResult/QLDCSingleFixtureResultMap';

export const CricketQLDCSingleFixtureResultBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<QLDCricketAssetTitle />
			<QLDCSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
