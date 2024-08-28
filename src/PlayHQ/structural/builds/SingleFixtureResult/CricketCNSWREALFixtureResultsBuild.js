import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {CNSWSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/CNSWSingleFixtureResult/CNSWSingleFixtureResultMap';
import {CNSWREALDefaultTitle} from '../../assets/common/TitleSequences/CNSWREALAssetTitles/Default';

export const CricketCNSWREALFixtureResultsBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<CNSWREALDefaultTitle />
			<CNSWSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
