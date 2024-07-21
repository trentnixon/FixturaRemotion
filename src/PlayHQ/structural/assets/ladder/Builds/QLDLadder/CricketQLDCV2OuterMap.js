import React from 'react';
import {Sequence} from 'remotion';
import {CricketQLDCInnerMap} from './CricketQLDCInnerMap';
import {ContainerQLDCBodyHeight} from '../../../common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../common/Containers/QLDC/ContainerQLDCAsset';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';

export const CricketQLDCV2OuterMap = () => {
	const {DATA} = useVideoDataContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	return (
		<ContainerQLDCBodyHeight>
			{DATA.DATA.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_LADDER}
						from={FPS_LADDER * index}
					>
						<ContainerQLDCAsset>
							<CricketQLDCInnerMap
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
							/>
						</ContainerQLDCAsset>
					</Sequence>
				);
			})}
		</ContainerQLDCBodyHeight>
	);
};
