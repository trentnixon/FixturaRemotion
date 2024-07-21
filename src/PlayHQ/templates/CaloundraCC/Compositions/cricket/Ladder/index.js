import React from 'react';
import {Series} from 'remotion';
// Components
import {LogoClubTitleHeader} from '../../../Components/Header/LogoClubTitleHeader';
import {LadderMain} from './LadderMain';
import SponsorMatcherLadders from '../../../../../structural/Sponsors/Utils/SponsorMatcherLadders';
import LadderSponsorsWithAccountLogo from '../../../../../structural/Sponsors/body/Ladder/LadderSponsorsWithAccountLogo';

export const Ladder = (props) => {
	const {FPS_MAIN} = props;
	const sponsorMatcher = new SponsorMatcherLadders(
		props.DATA,
		props.VIDEOMETA.Club.Sponsors
	);

	const groupedSponsors = sponsorMatcher.matchSponsors();
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeader {...props} />
				<LadderMain {...props} />

				<LadderSponsorsWithAccountLogo
					{...props}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
