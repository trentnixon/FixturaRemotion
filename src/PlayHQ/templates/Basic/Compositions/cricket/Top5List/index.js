import React from 'react';
import {Series} from 'remotion';

// Components
import {CricketBasicTop5Build} from '../../../../../structural/builds/Top5/CricketBasicTop5Build';
import SponsorMatcherTop5 from '../../../../../structural/Sponsors/Utils/SponsorMatcherTop5';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';

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
				<CricketBasicTop5Build
					TYPE={props.TYPE}
					groupedSponsors={groupedSponsors}
				/>
			</Series.Sequence>
		</Series>
	);
};
