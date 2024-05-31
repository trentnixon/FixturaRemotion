import React from 'react';
import {Series} from 'remotion';
import {Match} from './Sections';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
export const Results = (props) => {
	const {FPS_SCORECARD, groupedFixtures} = props;

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
									<Match
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
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
