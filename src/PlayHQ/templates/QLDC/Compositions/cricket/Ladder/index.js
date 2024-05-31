import React from 'react';
import {Sequence} from 'remotion';
// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/LogoClubTitleHeader';
import {LadderMain} from './LadderMain';
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import DynamicLadderSponsors from '../../../../../structural/Sponsors/body/Ladder/DynamicLadderSponsors';

export const Ladder = (props) => {
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
			<DynamicLadderSponsors {...props} groupedSponsors={groupedSponsors} />
		</Sequence>
	);
};
