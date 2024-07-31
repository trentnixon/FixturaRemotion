import React from 'react';
import DynamicSingleResultSponsors from '../../Sponsors/body/SingleResults/DynamicSingleResultSponsors';
import {CaloundraCCDefaultTitleHub} from '../../assets/common/TitleSequences/CaloundraCCAssetTitles/Default';
import { CaloundraCCSingleFixtureResultMap } from '../../sport/cricket/SingleFixtureResult/CaloundraCCSingleFixtureResult/CaloundraCCSingleFixtureResultMap';

export const CricketCaloundraCCFixtureResultBuild = ({
	groupedFixtures,
	groupedSponsors,
}) => {
	return (
		<>
			<CaloundraCCDefaultTitleHub />
			<CaloundraCCSingleFixtureResultMap groupedFixtures={groupedFixtures} />
			<DynamicSingleResultSponsors groupedSponsors={groupedSponsors} />
		</>
	);
};
