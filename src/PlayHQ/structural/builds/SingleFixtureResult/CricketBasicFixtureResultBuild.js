import React from 'react';
import {
	BasicDefaultTitleHub,
	BasicLimitedTitleHub,
} from '../../assets/common/TitleSequences/BasicAssetTitles/Default';
import {BasicSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/BasicSingleFixtureResult/BasicSingleFixtureResultMap';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';

export const CricketBasicSingleFixtureResultBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<BasicLimitedTitleHub />
			<BasicSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
