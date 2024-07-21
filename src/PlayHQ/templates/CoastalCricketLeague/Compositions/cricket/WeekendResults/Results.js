import React from 'react';
import {Sequence} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import { CricketCCLResultsBuild } from '../../../../../structural/builds/results/CricketCCLResultsBuild';

export const Results = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS} = useLayoutContext();
	return (
		<ContainerBodyHeight {...props}>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={TIMINGS.FPS_SCORECARD}
						from={TIMINGS.FPS_SCORECARD * index}
					>
						<ContainerInnerBodyHeight {...props}>
							{item.map((game, i) => (
								<CricketCCLResultsBuild
									key={`${index}_${i}`}
									INT={i}
									matchData={game}
									{...props}
								/>
							))}
						</ContainerInnerBodyHeight>
					</Sequence>
				);
			})}
		</ContainerBodyHeight>
	);
};
