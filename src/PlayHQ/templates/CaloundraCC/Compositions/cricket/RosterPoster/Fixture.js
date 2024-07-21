import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';

import {Match} from './Sections';
import {MatchContainer} from './Sections/MatchContainer';

export const Fixture = (props) => {
	const {DATA,FPS_SCORECARD} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA); 
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence durationInFrames={FPS_SCORECARD}>
							<MatchContainer>
								{item.map((game, i) => (
									<Match
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										{...props}
									/>
								))}
							</MatchContainer> 
						</Series.Sequence>
					);
				})}
			</Series>
		</ResultsContainer>
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

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	margin: 0%;
	position: relative;
	top: 0px;
`;
