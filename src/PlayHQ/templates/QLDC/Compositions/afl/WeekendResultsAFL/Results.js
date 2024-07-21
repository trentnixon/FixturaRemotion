import React from 'react';
import {Sequence} from 'remotion';
import { ContainerQLDCBodyHeight } from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import { ContainerQLDCAsset } from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';
import { AFLResultsLogoTeamNameScores } from '../../../../../structural/builds/results/AFLResultsLogoTeamNameScores';


export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD, SectionHeights} = props;

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
								<AFLResultsLogoTeamNameScores
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
