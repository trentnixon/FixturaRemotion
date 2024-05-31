import React from 'react';

import {Sequence} from 'remotion';
import {Match} from './Sections';
import {ContainerQLDCBodyHeight} from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';

export const FixturesMain = (props) => {
	const {FPS_SCORECARD, SectionHeights, groupedFixtures} = props;
	return (
		<ContainerQLDCBodyHeight Height={SectionHeights.Body}>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<ContainerQLDCAsset>
							{item.map((game, i) => (
								<Match
									key={`${'index'}_${i}`}
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
