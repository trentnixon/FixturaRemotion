import React from 'react';
import {Sequence} from 'remotion';
import {LadderPositions} from './Sections';
import { ContainerBodyHeight, ContainerInnerBodyHeight } from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	return (
		<ContainerBodyHeight {...props}> 
			{DATA.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_LADDER}
						from={FPS_LADDER * index}
					>
						<ContainerInnerBodyHeight {...props}>
							<LadderPositions
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
								{...props}
							/> 
						</ContainerInnerBodyHeight>
					</Sequence>
				);
			})}
		</ContainerBodyHeight>
	);
};
