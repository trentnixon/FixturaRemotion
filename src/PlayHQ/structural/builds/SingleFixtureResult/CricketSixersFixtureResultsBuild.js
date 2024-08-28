import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {SixersLeagueDefaultTitle} from '../../assets/common/TitleSequences/SixersLeague/Default';
import {SixersSingleFixtureResultMap} from '../../sport/cricket/SingleFixtureResult/SixersSingleFixtureResult/SixersSingleFixtureResultMap';

export const CricketSixersFixtureResultsBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<SixersLeagueDefaultTitle />
			<SixersSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
