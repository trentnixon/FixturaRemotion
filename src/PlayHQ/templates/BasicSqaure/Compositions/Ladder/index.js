import React from 'react';
import {Series} from 'remotion';
// Components
import {LogoClubTitleHeader} from './Title';
import {LadderMain} from './LadderMain';

export const Ladder = ({DATA, theme, fontFamily, FPS_MAIN, FPS_LADDER}) => {
	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader
					THEME={theme}
					fontFamily={fontFamily}
					DATA={DATA.VIDEOMETA}
					FPS_MAIN={FPS_MAIN}
				/>
				<LadderMain
					THEME={theme}
					DATA={DATA.DATA}
					fontFamily={fontFamily}
					FPS_MAIN={FPS_MAIN}
					FPS_LADDER={FPS_LADDER}
				/>
			</Series.Sequence>
		</Series>
	);
};
