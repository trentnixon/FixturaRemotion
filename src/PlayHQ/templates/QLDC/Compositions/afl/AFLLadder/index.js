import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/OLD_LogoClubTitleHeader';
import {LadderMain} from './LadderMain';
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import LadderSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Ladder/LadderSponsorsWithAccountLogo';

export const AFLLadder = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	const sponsorMatcher = new SponsorMatcherLadders(
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
			<LadderMain {...props} />
			<LadderSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/>
		</Sequence>
	);
}; 
