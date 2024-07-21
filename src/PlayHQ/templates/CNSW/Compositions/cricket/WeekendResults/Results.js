import React from 'react';
import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import { CricketCNSWResultsBuild } from '../../../../../structural/builds/results/CricketCNSWResultsBuild';
export const Results = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS} = useLayoutContext();
	return (
		<ContainerBodyHeight>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							durationInFrames={TIMINGS.FPS_SCORECARD}
							layout="none"
						>
							<ContainerInnerBodyHeight>
								{item.map((game, i) => (
									<CricketCNSWResultsBuild
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
									/>
								))}
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
