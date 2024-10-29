import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {MutedLeagueSingleFixtureTitle} from '../../assets/common/TitleSequences/Muted/Default';
import {MutedSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/MutedSingleFixtureResult/MutedSingleFixtureResultMap';

export const CricketMutedFixtureResultsBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<MutedLeagueSingleFixtureTitle />
			<MutedSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
