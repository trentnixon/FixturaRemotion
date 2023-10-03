import React from 'react';
import {Series} from 'remotion';

// Components
import {LogoClubTitleHeaderLimited} from '../../Components/Header/LogoClubTitleHeader';
import {Results} from './Results';

export const WeekendSingleGameResult = ({
	DATA,
	theme,
	fontFamily,
	FPS_MAIN, 
	FPS_SCORECARD,
}) => {
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeaderLimited
					THEME={theme}
					fontFamily={fontFamily}
					DATA={DATA.VIDEOMETA}
					FPS_MAIN={FPS_MAIN}
				/>
				<Results
					THEME={theme}
					DATA={DATA}
					fontFamily={fontFamily}
					FPS_MAIN={FPS_MAIN}
					FPS_SCORECARD={FPS_SCORECARD}
				/>
			</Series.Sequence>
		</Series>
	);
};
