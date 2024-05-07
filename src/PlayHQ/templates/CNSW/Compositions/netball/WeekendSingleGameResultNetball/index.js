import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';
import {PrincipalBodySponsor} from '../../../Components/Intro/PrincipalSponsor';

export const WeekendSingleGameResultNetball = (props) => {
	const {FPS_MAIN} = props;
	props.SectionHeights.Header = 80;
	props.SectionHeights.Body = 1350 - (80 + 120);
	props.SectionHeights.Footer = 120;
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
  