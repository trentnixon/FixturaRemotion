import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import { AFLMatchContainer } from '../../../../../structural/sport/afl/Containers/AFLMatchContainer';
import { BuildAFLSingleGameResult } from '../../../../../structural/assets/SingleGameResult/Builds/BuildAFLSingleGameResult';

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

export const Results = (props) => {
	const {DATA, FPS_SCORECARD} = props;

	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<AFLMatchContainer  MarginBottom='60px'>
								{item.map((game, i) => (
									<BuildAFLSingleGameResult
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										{...props}
									/>
								))}
							</AFLMatchContainer>
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
