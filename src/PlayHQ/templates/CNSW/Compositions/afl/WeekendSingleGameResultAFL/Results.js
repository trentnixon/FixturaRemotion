import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';

import {BuildAFLSingleGameResult} from '../../../../../structural/assets/SingleGameResult/Builds/BuildAFLSingleGameResult';

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

const MatchContainer = (props) => {
	return <MatchContainerStyles>{props.children}</MatchContainerStyles>;
};

export const Results = (props) => {
	const {DATA, FPS_SCORECARD} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<MatchContainer>
								{item.map((game, i) => (
									<BuildAFLSingleGameResult
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
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
		if (i % 1 === 0) {
			acc.push([curr]);
		} else {
			acc[acc.length - 1].push(curr);
		}
		return acc;
	}, []);
}
