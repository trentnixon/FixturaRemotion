import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import { CNSWDefaultTitle } from '../../assets/common/TitleSequences/CNSWAssetTitles/Default';
import { CNSWSingleFixtureResultMap } from '../../sport/cricket/SingleFixtureResult/CNSWSingleFixtureResult/CNSWSingleFixtureResultMap';

export const CricketCNSWSingleFixtureResultBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<CNSWDefaultTitle />
			<CNSWSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
