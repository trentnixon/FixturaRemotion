import React from 'react';
import styled from 'styled-components';
import { Series} from 'remotion';

import {Match} from './Sections';
import {MatchContainer} from './Sections/MatchContainer';

export const FixturesMain = ({DATA, THEME, fontFamily, FPS_SCORECARD}) => {
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<FixtureContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<MatchContainer>
								{item.map((game, i) => (
									<Match
										key={`${'index'}_${i}`}
										INT={i}
										matchData={game}
										THEME={THEME}
										fontFamily={fontFamily}
										FPS_SCORECARD={FPS_SCORECARD}
									/>
								))}
							</MatchContainer>
						</Series.Sequence>
					);
				})}
			</Series>
		</FixtureContainer>
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

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 96%;
	margin: 0 2%;
	height: auto;
	position: relative;
	top: 400px;
`;
