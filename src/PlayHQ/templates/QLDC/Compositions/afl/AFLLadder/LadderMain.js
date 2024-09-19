import React from 'react';
import {Sequence} from 'remotion';
import {ContainerQLDCBodyHeight} from '../../../../../structural/assets/common/Containers/QLDC/ContainerBodyHeight';
import {ContainerQLDCAsset} from '../../../../../structural/assets/common/Containers/QLDC/ContainerQLDCAsset';
import {BuildBasicLadderV2} from '../../../../../structural/assets/ladder/Builds/BasicLadderV2/BuildBasicLadderV2';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER, SectionHeights} = props;
	const LadderDataPoints = ['P', 'PTS', 'W', 'L', 'D', 'BYE'];
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
							<BuildBasicLadderV2
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
								CharacterLimit={25}
								LadderDataPoints={LadderDataPoints}
								{...props}
							/>
						</ContainerQLDCAsset>
					</Sequence>
				);
			})}
		</ContainerQLDCBodyHeight>
	);
};
