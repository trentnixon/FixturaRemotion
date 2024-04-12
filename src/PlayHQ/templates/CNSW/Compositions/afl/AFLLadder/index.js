import React from 'react';
import {Series} from 'remotion';
// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {LadderMain} from './LadderMain';
import {PrincipalBodySponsor} from '../../../Components/Intro/PrincipalSponsor';

export const AFLLadder = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeader {...props} /> 
				<LadderMain {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence>
		</Series>
	);
};
