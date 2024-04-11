import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {PrincipalBodySponsor} from '../../../Components/Intro/PrincipalSponsor';
import {BasicAFLTop5GoalScorers} from '../../../../../structural/sport/afl/Top5/BasicAFLTop5GoalScorers';

export const Top5AFLScorers = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
				<LogoClubTitleHeader {...props} />
				<BasicAFLTop5GoalScorers {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence>
		</Series>
	);
}; 
