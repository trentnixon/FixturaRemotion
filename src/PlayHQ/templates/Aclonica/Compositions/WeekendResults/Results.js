import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {Match} from './Sections';
import {MatchContainer} from './Sections/MatchContainer';

export const Results = (props) => {
	const {DATA, FPS_SCORECARD} = props;

	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence durationInFrames={FPS_SCORECARD} key={index}>
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
		if (i % 2 === 0) {
			acc.push([curr]);
		} else {
			acc[acc.length - 1].push(curr);
		}
		return acc;
	}, []);
}

const ResultsContainer = styled.div`
	display: flex;

	width:75%;
	margin: 0 0 0 25%;
	height: 1300px;
	position: relative;
	top: 100px;
`;
