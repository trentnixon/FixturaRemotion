import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderVersion2} from '../../../Components/Header/OLD_LogoClubTitleHeader';
import {Results} from './Results';

export const WeekendResultsNetball = (props) => {
	const {FPS_MAIN, VIDEOMETA} = props;
	return (
		<Series>
			<Series.Sequence
				durationInFrames={FPS_MAIN}
				style={{flexDirection: 'column'}}
			>
				<LogoClubTitleHeaderVersion2
					{...props}
					Labels={{
						small: VIDEOMETA.grouping_category,
						large: VIDEOMETA.Video.TitleSplit[0],
					}}
				/>
				<Results {...props} />
				{/* <PrincipalBodySponsorVersion2 {...props} /> */}
			</Series.Sequence>
		</Series>
	);
};
