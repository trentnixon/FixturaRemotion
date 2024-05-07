import React from 'react';
import {Series} from 'remotion';

// Components
import {Results} from './Results';
import {LogoClubTitleHeaderLimited} from '../../../Components/Header/LogoClubTitleHeader';
import {PrincipalBodySponsor} from '../../../Components/Intro/PrincipalSponsor';

export const WeekendSingleGameResult = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeaderLimited {...props} />
				<Results {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence>
		</Series>
	);
}; 
