import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import { PrincipalBodySponsor } from '../../../Components/Intro/PrincipalSponsor';

export const WeekendSingleGameResultNetball = (props) => {
	const {FPS_MAIN} = props;

	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader {...props} />
				<Results {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence> 
		</Series>
	);
}; 
