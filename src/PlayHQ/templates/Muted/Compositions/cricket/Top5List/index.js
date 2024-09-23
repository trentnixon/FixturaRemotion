import React from 'react';
import {Series} from 'remotion';

// Components

import SponsorMatcherTop5 from '../../../../../structural/Sponsors/Utils/SponsorMatcherTop5';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import { CricketThunderTop5Build } from '../../../../../structural/builds/Top5/CricketThunderTop5Build';

export const Top5List = (props) => {
	const {Club, TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const sponsorMatcher = new SponsorMatcherTop5(DATA.DATA, Club.Sponsors);
	const groupedSponsors = sponsorMatcher.matchSponsors();

	return (
		<Series>
			<Series.Sequence
				durationInFrames={TIMINGS.FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<CricketThunderTop5Build
					groupedSponsors={groupedSponsors}
					TYPE={props.TYPE}
				/>
			</Series.Sequence>
		</Series>
	);
};
