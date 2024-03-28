import React from 'react';
import {Sequence} from 'remotion';

import {Match} from './Sections';
import {MatchContainer} from './Sections/MatchContainer';

export const Fixture = (props) => {
	const {DATA, FPS_SCORECARD} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<MatchContainer>
			{groupsOfTwo.map((item, index) => {
				return (
					<Sequence
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
						style={{flexDirection: 'column'}}
					>
						{item.map((game, i) => (
							<Match
								key={`${index}_${i}`}
								INT={i}
								matchData={game}
								{...props}
							/>
						))}
					</Sequence>
				);
			})}
		</MatchContainer>
	);
};

function splitIntoGroupsOfTwo(arr) {
	return arr.reduce((acc, curr, i) => {
		if (i % 1 === 0) {
			acc.push([curr]);
		} else {
			acc[acc.length - 1].push(curr);
		}
		return acc;
	}, []);
}
