import React from 'react';
import {Series} from 'remotion';

import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../common/Containers/ContainerBodyHeight';
import {BuildSixersLadder} from './BuildBasicLadderV2';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
export const CricketSixersOuterMap = (props) => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	const LadderDataPoints = ['P', 'W', 'L', 'TIE', 'BYE', 'PTS'];

	return (
		<ContainerBodyHeight styles={{padding:'0 5%'}}>
			<Series>
				{DATA.DATA.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_LADDER}
						>
							<ContainerInnerBodyHeight>
								<BuildSixersLadder
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									LadderDataPoints={LadderDataPoints}
									{...props}
								/>
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
