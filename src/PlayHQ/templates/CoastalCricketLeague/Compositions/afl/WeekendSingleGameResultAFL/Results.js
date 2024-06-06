import React from 'react';
import {Series} from 'remotion';
import {Match} from './Sections';
import { ContainerQLDCBodyHeight } from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import { ContainerQLDCAsset } from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD, SectionHeights} = props;

	return (
		<ContainerQLDCBodyHeight Height={SectionHeights.Body}>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<ContainerQLDCAsset>
								{item.map((game, i) => (
									<Match
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										{...props}
									/>
								))}
							</ContainerQLDCAsset>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerQLDCBodyHeight>
	);
};
