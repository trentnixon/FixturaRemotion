import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import {Match} from './Sections';

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0 auto;
`;
const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 90%;
	margin: 0 0 0 8%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const Results = (props) => {
	const {DATA, FPS_SCORECARD, SectionHeights} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	const sumObjectValues = (obj) => {
		return Object.values(obj).reduce((sum, value) => sum + value, 0);
	};
	return (
		<ResultsContainer Height={sumObjectValues(SectionHeights)}>
			{groupsOfTwo.map((item, index) => {
				return (
					<Sequence
						durationInFrames={FPS_SCORECARD / 2}
						from={(FPS_SCORECARD / 2) * index}
						key={index}
					>
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
					</Sequence>
				);
			})}
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
