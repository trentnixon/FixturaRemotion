import React from 'react';
import {Series} from 'remotion';

// Components
import {BasicDefaultTitle} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import {PrincipalBodySponsor} from '../../../Components/Intro/OLD_PrincipalSponsor';

export const WeekendResultsNetball = (props) => {
	const {FPS_MAIN} = props;

	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<BasicDefaultTitle {...props} />
				<Results {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence>
		</Series>
	);
};
