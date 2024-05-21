import React from 'react';

import {Series} from 'remotion';
import {BuildBasicLadder} from '../../../../../structural/assets/ladder/Builds/BasicLadder/BuildBasicLadder';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	const LadderDataPoints = ['P', 'PA', 'PTS', 'W', 'L', 'D', 'BYE'];
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{DATA.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_LADDER}
						>
							<ContainerInnerBodyHeight {...props}>
								<BuildBasicLadder
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									LadderDataPoints={LadderDataPoints}
									CharacterLimit={40}
									{...props}
								/>
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
