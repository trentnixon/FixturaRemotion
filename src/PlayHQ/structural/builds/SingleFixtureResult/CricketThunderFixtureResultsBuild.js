import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {ThunderSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/ThunderSingleFixtureResult/ThunderSingleFixtureResultMap';
import { ThunderLeagueLimitedTitle } from '../../assets/common/TitleSequences/ThunderLeague/Limited';

export const CricketThunderFixtureResultsBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<ThunderLeagueLimitedTitle />
			<ThunderSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
