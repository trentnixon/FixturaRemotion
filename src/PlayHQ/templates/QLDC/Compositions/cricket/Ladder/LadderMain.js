import React from 'react';
import {Sequence} from 'remotion';
import {LadderPositions} from './Sections';
import {ContainerQLDCBodyHeight} from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER, SectionHeights} = props;
	return (
		<ContainerQLDCBodyHeight Height={SectionHeights.Body}>
			{DATA.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_LADDER}
						from={FPS_LADDER * index}
					>
						<ContainerQLDCAsset>
							<LadderPositions
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
								{...props}
							/>
						</ContainerQLDCAsset>
					</Sequence>
				);
			})}
		</ContainerQLDCBodyHeight>
	);
};
