import React from 'react';
import {Series} from 'remotion';

import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../common/Containers/ContainerBodyHeight';
import {BuildMutedLadder} from './BuildMutedLadderV2';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';
export const CricketMutedOuterMap = (props) => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	const LadderDataPoints = ['P', 'W', 'L', 'PTS'];

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
								<BuildMutedLadder
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
