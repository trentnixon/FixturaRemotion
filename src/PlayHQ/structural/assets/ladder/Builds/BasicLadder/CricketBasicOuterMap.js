import React from 'react';
import {Series} from 'remotion';
import {CricketBasicInnerMap} from './CricketBasicInnerMap';

import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../common/Containers/ContainerBodyHeight';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
export const CricketBasicOuterMap = () => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	const LadderDataPoints = ['P', 'PA', 'PTS', 'W', 'L', 'D', 'BYE'];
	return (
		<ContainerBodyHeight>
			<Series>
				{DATA.DATA.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_LADDER}
						>
							<ContainerInnerBodyHeight>
								<CricketBasicInnerMap
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									LadderDataPoints={LadderDataPoints}
								/>
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
