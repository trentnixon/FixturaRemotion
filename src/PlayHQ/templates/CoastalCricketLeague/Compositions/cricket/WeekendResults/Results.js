import React from 'react';
import {Sequence} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {CCLResults} from '../../../../../structural/assets/results/CLL/index_cricket';

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD} = props;

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
								<CCLResults
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
