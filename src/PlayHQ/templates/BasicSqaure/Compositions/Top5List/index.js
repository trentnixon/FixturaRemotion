import React from 'react';
import { Series} from 'remotion';

// Components
import {LogoClubTitleHeader} from '../../Components/Header/LogoClubTitleHeader';
import {Top5PlayersMap} from './Top5Map';

export const Top5List = ({DATA, theme, fontFamily, FPS_MAIN, TYPE}) => {

	return (
		<Series>
			<Series.Sequence durationInFrames={FPS_MAIN} layout="none">
				<LogoClubTitleHeader THEME={theme} fontFamily={fontFamily} DATA={DATA.VIDEOMETA} FPS_MAIN={FPS_MAIN}/>
				<Top5PlayersMap  
					THEME={theme}
					DATA={DATA.DATA} 
					fontFamily={fontFamily}
					FPS_MAIN={FPS_MAIN}
					TYPE={TYPE}
				/>
			</Series.Sequence>
		</Series>
	); 
};
