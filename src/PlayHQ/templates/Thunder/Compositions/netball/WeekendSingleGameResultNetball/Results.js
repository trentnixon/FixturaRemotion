import React from 'react';

import {Series} from 'remotion';
import {BuildBasicNetballSingleGameResult} from '../../../../../structural/assets/SingleGameResult/Builds/BuildBasicNetballSingleGameResult';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};
	const ComponentFPS = {
		Display: {
			Start: 0,
			End: props.FPS_SCORECARD,
		},
		Players: {
			Start: 0,
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
									<BuildBasicNetballSingleGameResult
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										ComponentFPS={ComponentFPS}
										StyleConfig={StyleConfig}
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
