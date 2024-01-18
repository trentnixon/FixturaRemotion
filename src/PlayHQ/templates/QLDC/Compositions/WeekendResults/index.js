import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import {PrincipalBodySponsorVersion2} from '../../Components/Intro/PrincipalSponsor';

export const WeekendResults = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const HeaderLabels = {
		small: VIDEOMETA.grouping_category,
		large: VIDEOMETA.Video.TitleSplit[0],
	};
	return (
		<Sequence durationInFrames={FPS_MAIN} style={{flexDirection: 'column'}}>
			<LogoClubTitleHeaderVersion2 {...props} Labels={HeaderLabels} />
			<Results {...props} />
			<PrincipalBodySponsorVersion2 {...props} />
		</Sequence>
	);
};
