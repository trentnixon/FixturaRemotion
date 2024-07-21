import React from 'react';

import {Sequence} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import { CCLFixtures } from './Sections/TeamsAndScores';

export const FixturesMain = ({groupedFixtures}) => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	return (
		<ContainerBodyHeight>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<ContainerInnerBodyHeight>
							{item.map((game, i) => (
								<CCLFixtures key={`${'index'}_${i}`} INT={i} matchData={game} />
							))}
						</ContainerInnerBodyHeight>
					</Sequence>
				);
			})}
		</ContainerBodyHeight>
	);
};
