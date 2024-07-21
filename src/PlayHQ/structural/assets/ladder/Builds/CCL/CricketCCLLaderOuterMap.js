import React from 'react';
import {Sequence} from 'remotion';
import {CricketCCLLadderInnerMap} from './CricketCCLLadderInnerMap';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../common/Containers/ContainerBodyHeight';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

export const CricketCCLLaderOuterMap = () => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	return (
		<ContainerBodyHeight>
			{DATA.DATA.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_LADDER}
						from={FPS_LADDER * index}
					>
						<ContainerInnerBodyHeight>
							<CricketCCLLadderInnerMap
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
							/>
						</ContainerInnerBodyHeight>
					</Sequence>
				);
			})}
		</ContainerBodyHeight>
	);
};
