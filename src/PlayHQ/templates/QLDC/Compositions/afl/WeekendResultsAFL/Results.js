import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import { AFLResultsLogoTeamNameScores } from '../../../../../structural/assets/results/Builds/AFLResultsLogoTeamNameScores';

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 40px;
`;
const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 83%;
	margin: 0 0 0 15%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const Results = (props) => {
	const {DATA, FPS_SCORECARD, SectionHeights} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);

	return (
		<ResultsContainer Height={SectionHeights.Body}>
			{groupsOfTwo.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<MatchContainerStyles>
							{item.map((game, i) => (
								<AFLResultsLogoTeamNameScores
									key={`${index}_${i}`}
									INT={i}
									matchData={game}
									{...props}
								/>
							))}
						</MatchContainerStyles> 
					</Sequence>
				);
			})}
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
