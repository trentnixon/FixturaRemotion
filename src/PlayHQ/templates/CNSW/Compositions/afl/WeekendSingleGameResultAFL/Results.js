import React from 'react';
import {Series} from 'remotion';

import {BuildAFLSingleGameResult} from '../../../../../structural/assets/SingleGameResult/Builds/BuildAFLSingleGameResult';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};

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
									<BuildAFLSingleGameResult
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
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
