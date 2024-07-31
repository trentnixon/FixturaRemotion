import React from 'react';
import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import { CricketCaloundraCCResultsBuild } from '../../../../../structural/builds/results/CricketCaloundraCCResultsBuild';

export const CaloundraCCWeekendResultMap = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS} = useLayoutContext();

	return (
		<ContainerBodyHeight>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={TIMINGS.FPS_SCORECARD}
						>
							<ContainerInnerBodyHeight>
								{item.map((game, i) => (
									<CricketCaloundraCCResultsBuild
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										{...props}
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
