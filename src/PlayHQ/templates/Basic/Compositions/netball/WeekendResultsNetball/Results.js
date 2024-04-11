import React from 'react';

import {Series} from 'remotion';
import {NetballBasicResultsRows} from '../../../../../structural/assets/results/Builds/NetballBasicResultsRows';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const Results = (props) => {
	const {DATA, FPS_SCORECARD} = props;
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
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_SCORECARD}
						>
							<ContainerInnerBodyHeight {...props}>
								{item.map((game, i) => (
									<NetballBasicResultsRows
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

function splitIntoGroupsOfTwo(arr) {
	return arr.reduce((acc, curr, i) => {
		if (i % 2 === 0) {
			acc.push([curr]);
		} else {
			acc[acc.length - 1].push(curr);
		}
		return acc;
	}, []);
}
