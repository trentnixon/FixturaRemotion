import React from 'react';
import {Series} from 'remotion';
import {BuildBasicLadderV2} from '../../../../../structural/assets/ladder/Builds/BasicLadderV2/BuildBasicLadderV2';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};
	const LadderDataPoints = ['P', 'W', 'L', 'D', 'B', 'PTS'];
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{DATA.map((item, index) => {
					return (
						<Series.Sequence key={index} layout='none' durationInFrames={FPS_LADDER}>
							<ContainerInnerBodyHeight {...props}>
								<BuildBasicLadderV2
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									StyleConfig={StyleConfig}
									LadderDataPoints={LadderDataPoints}
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
