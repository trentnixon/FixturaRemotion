import React from 'react';
import {Series} from 'remotion';
import {AFLBasicResultRow} from '../../../../../structural/assets/results/Builds/AFLBasicResultRow';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD} = props;
	const ComponentFPS = {
		Display: {
			Start: 15,
			End: props.FPS_SCORECARD / 2 + 30,
		},
		Players: {
			Start: props.FPS_SCORECARD / 2 + 30,
			End: props.FPS_SCORECARD,
		},
	};
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_SCORECARD}
						>
							<ContainerInnerBodyHeight {...props}>
								{item.map((game, i) => (
									<AFLBasicResultRow
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										ComponentFPS={ComponentFPS}
										{...props}
									/>
								))}
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};