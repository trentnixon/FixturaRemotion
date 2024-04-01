import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {Match} from './Sections';

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

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 40px;
`;

export const Results = (props) => {
	const {DATA, FPS_SCORECARD, SectionHeights} = props;

	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<ResultsContainer Height={SectionHeights.Body}>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<MatchContainerStyles>
								{item.map((game, i) => (
									<Match
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										{...props}
									/>
								))}
							</MatchContainerStyles>
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
