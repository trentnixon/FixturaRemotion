import React from 'react';
import {Sequence} from 'remotion';

// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {PrincipalBodySponsorVersion2} from '../../../Components/Intro/PrincipalSponsor';
import {GoalsPlayerNameAFLTop5GoalScorers} from '../../../../../structural/sport/afl/Top5/GoalsPlayerNameAFLTop5GoalScorers';

export const Top5AFLScorers = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<LogoClubTitleHeaderVersion2
				{...props}
				Labels={{
					small: VIDEOMETA.grouping_category,
					large: VIDEOMETA.Video.TitleSplit[0],
				}}
			/>
			<GoalsPlayerNameAFLTop5GoalScorers {...props} />
			<PrincipalBodySponsorVersion2 {...props} />
		</Sequence>
	);
};
