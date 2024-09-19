import React from 'react';
import {Series} from 'remotion';
// Components
import {BasicDefaultTitle} from '../../../Components/Header/LogoClubTitleHeader';
import {LadderMain} from './LadderMain';
import {PrincipalBodySponsor} from '../../../Components/Intro/OLD_PrincipalSponsor';

export const NetballLadder = (props) => {
	const {FPS_MAIN} = props;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<BasicDefaultTitle {...props} />
				<LadderMain {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence>
		</Series>
	);
};
