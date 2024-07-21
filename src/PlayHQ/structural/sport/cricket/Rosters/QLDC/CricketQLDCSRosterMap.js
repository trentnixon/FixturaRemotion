import React from 'react';
import {Sequence} from 'remotion';

import {CricketQLDCRosterBuild} from './CricketQLDCRosterBuild';
import {MatchContainer} from './components/MatchContainer';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';

export const CricketQLDCSRosterMap = () => {
	const {TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_SCORECARD} = TIMINGS;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA.DATA);
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
							<CricketQLDCRosterBuild
								key={`${index}_${i}`}
								INT={i}
								matchData={game}
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
