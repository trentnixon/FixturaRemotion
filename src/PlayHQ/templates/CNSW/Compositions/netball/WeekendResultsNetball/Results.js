import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {NetballBasicResultsRows} from '../../../../../structural/assets/results/Builds/NetballBasicResultsRows';

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 90%;
	margin: 0 5%;
	height: 960px;
	position: relative;
	top: 210px;
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
	const {DATA, FPS_SCORECARD} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	const TransitionShift = 45;
	const ComponentFPS = {
		Display: {
			Start: 15,
			End: props.FPS_SCORECARD / 2 + TransitionShift,
		},
		Players: {
			Start: props.FPS_SCORECARD / 2 + TransitionShift,
			End: props.FPS_SCORECARD,
		},
	};
	const StyleConfig = {Font: props.Font, Color: props.Color};
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<MatchContainer>
								{item.map((game, i) => (
									<NetballBasicResultsRows
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										ComponentFPS={ComponentFPS}
										StyleConfig={StyleConfig}
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

const MatchContainer = (props) => {
	return <MatchContainerStyles>{props.children}</MatchContainerStyles>;
};
