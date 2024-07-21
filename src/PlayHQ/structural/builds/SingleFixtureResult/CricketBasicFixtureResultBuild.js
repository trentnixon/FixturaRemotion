import React from 'react';
import { BasicDefaultTitleHub } from '../../assets/common/TitleSequences/BasicAssetTitles/Default';
import { BasicSingleFixtureResultMap } from '../../sport/cricket/SingleFixtureResult/BasicSingleFixtureResult/BasicSingleFixtureResultMap';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';


export const CricketBasicSingleFixtureResultBuild = ({groupedFixtures, groupedSponsors}) => {
	return (
		<>
			<BasicDefaultTitleHub />
			<BasicSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
