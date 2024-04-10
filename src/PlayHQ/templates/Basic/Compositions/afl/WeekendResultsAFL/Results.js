import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {AFLBasicResultRow} from '../../../../../structural/assets/results/Builds/AFLBasicResultRow';

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 96%;
	margin: 0 2%;
	height: 1300px;
	position: relative;
	top: 200px;
`;
const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 60px;
`;

export const Results = (props) => {
	const {DATA, FPS_SCORECARD} = props;

	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	const ComponentFPS = {
		Display: {
			Start: 15,
			End: (props.FPS_SCORECARD / 2)+30,
		},
		Players: {
			Start: (props.FPS_SCORECARD / 2)+30,
			End: props.FPS_SCORECARD,
		},
	}; 
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<MatchContainer>
								{item.map((game, i) => (
									<AFLBasicResultRow
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										ComponentFPS={ComponentFPS}
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

export const MatchContainer = (props) => {
	return <MatchContainerStyles>{props.children}</MatchContainerStyles>;
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
