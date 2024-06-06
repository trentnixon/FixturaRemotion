import React from 'react';

import {Sequence} from 'remotion';
import {Match} from './Sections';
import { ContainerBodyHeight, ContainerInnerBodyHeight } from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const FixturesMain = (props) => {
	const {FPS_SCORECARD, groupedFixtures} = props;
	return (
		<ContainerBodyHeight {...props}> 
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<ContainerInnerBodyHeight {...props}>
							{item.map((game, i) => (
								<Match
									key={`${'index'}_${i}`}
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
