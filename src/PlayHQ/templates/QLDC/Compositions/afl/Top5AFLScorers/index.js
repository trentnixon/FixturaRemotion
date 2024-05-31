import React from 'react';
import {Sequence} from 'remotion';

// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {GoalsPlayerNameAFLTop5GoalScorers} from '../../../../../structural/sport/afl/Top5/GoalsPlayerNameAFLTop5GoalScorers';
import SponsorMatcherTop5 from '../../../../../structural/Sponsors/Utils/SponsorMatcherTop5';
import DynamicTop5Sponsors from '../../../../../structural/Sponsors/body/Top5/DynamicTop5Sponsors';

export const Top5AFLScorers = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const sponsorMatcher = new SponsorMatcherTop5(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);
	const groupedSponsors = sponsorMatcher.matchSponsors();
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
			<DynamicTop5Sponsors {...props} groupedSponsors={groupedSponsors} />
		</Sequence> 
	);
};
