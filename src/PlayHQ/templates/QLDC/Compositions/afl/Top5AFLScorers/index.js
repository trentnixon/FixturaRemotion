import React from 'react';
import {Sequence} from 'remotion';

// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {Top5PlayersMap} from './Top5Map';
import {PrincipalBodySponsorVersion2} from '../../../Components/Intro/PrincipalSponsor';

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
			<Top5PlayersMap {...props} /> 
			<PrincipalBodySponsorVersion2 {...props} />
		</Sequence>
	);
};
