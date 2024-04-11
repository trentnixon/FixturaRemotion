import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {FixturesMain} from './Fixtures';
import {PrincipalBodySponsor} from '../../../Components/Intro/PrincipalSponsor';

export const UpComingAFLFixtures = (props) => {
	const {FPS_MAIN} = props;

	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeader {...props} />
				<FixturesMain {...props} />
				<PrincipalBodySponsor {...props} />
			</Series.Sequence>
		</Series>
	);
};
