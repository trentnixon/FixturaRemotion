import React from 'react';
import {Sequence} from 'remotion';

// Components
import {Results} from './Results';
import SponsorMatcher from '../../../../../structural/Sponsors/Utils/SponsorMatcher';
import DynamicSingleResultSponsors from '../../../../../structural/Sponsors/body/SingleResults/DynamicSingleResultSponsors';

export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	const sponsorMatcher = new SponsorMatcher(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors,
		1
	);
	const {groupedFixtures, groupedSponsors} = sponsorMatcher.matchSponsors();

	return ( 
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<Results {...props} groupedFixtures={groupedFixtures}/>
			<DynamicSingleResultSponsors {...props} groupedSponsors={groupedSponsors} /> 
		</Sequence>  
	);
};
