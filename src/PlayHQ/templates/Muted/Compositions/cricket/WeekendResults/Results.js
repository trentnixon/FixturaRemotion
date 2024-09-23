import React from 'react';
import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {CricketMutedLeagueResultsBuild} from '../../../../../structural/builds/results/CricketMutedLeagueResultsBuild';
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
							<ContainerInnerBodyHeight
								styles={{
									justifyContent: 'space-between',
								}}
							>
								{item.map((game, i) => (
									<CricketMutedLeagueResultsBuild
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
