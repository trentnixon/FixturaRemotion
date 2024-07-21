import React from 'react';

import {Sequence} from 'remotion';

import {ContainerQLDCBodyHeight} from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {TeamsAndScores} from './Sections/TeamsAndScores';

export const FixturesMain = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;

	return (
		<ContainerQLDCBodyHeight>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<ContainerQLDCAsset>
							{item.map((game, i) => (
								<TeamsAndScores
									key={`${'index'}_${i}`}
									INT={i}
									matchData={game}
								/>
							))}
						</ContainerQLDCAsset>
					</Sequence>
				);
			})}
		</ContainerQLDCBodyHeight>
	);
};
