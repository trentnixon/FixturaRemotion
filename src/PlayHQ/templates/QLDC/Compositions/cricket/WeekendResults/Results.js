import React from 'react';
import {Sequence} from 'remotion';
import {ContainerQLDCBodyHeight} from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import { CricketQLDCResultsBuild } from '../../../../../structural/builds/results/CricketQLDCResultsBuild';
export const Results = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS} = useLayoutContext();
	return (
		<ContainerQLDCBodyHeight>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={TIMINGS.FPS_SCORECARD}
						from={TIMINGS.FPS_SCORECARD * index}
					>
						<ContainerQLDCAsset>
							{item.map((game, i) => (
								<CricketQLDCResultsBuild
									key={`${index}_${i}`}
									INT={i}
									matchData={game}
									{...props}
								/>
							))}
						</ContainerQLDCAsset>
					</Sequence>
				);
			})}
		</ContainerQLDCBodyHeight>
	);
};
