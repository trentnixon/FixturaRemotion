import React from 'react';
import {Series} from 'remotion';
import {Match} from './Sections';
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
							durationInFrames={FPS_SCORECARD}
							layout="none"
						>
							<ContainerInnerBodyHeight {...props}>
								{item.map((game, i) => (
									<Match
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
