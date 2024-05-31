import React from 'react';
import {Sequence} from 'remotion';
import {BuildTeamVsTeamRows} from '../../../../../structural/assets/upcoming/Builds/BuildTeamVsTeamRows';
import { ContainerQLDCBodyHeight } from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import { ContainerQLDCAsset } from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';

export const FixturesMain = (props) => {
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
								<BuildTeamVsTeamRows
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