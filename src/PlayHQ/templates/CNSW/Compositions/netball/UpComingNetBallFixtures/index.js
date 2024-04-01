import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import { PrincipalBodySponsor } from '../../../Components/Intro/PrincipalSponsor';

export const UpComingNetBallFixtures = (props) => {
	const {FPS_MAIN} = props;

	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader {...props} />
				<FixturesMain {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence> 
		</Series>
	);
}; 
