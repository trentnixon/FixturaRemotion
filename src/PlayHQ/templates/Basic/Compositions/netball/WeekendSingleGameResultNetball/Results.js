import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import { BuildBasicNetballSingleGameResult } from '../../../../../structural/assets/SingleGameResult/Builds/BuildBasicNetballSingleGameResult';

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 96%;
	margin: 0 2%;
	height: 900px;
	position: relative;
	top: 200px;

`;
const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
	justify-content: center;
`;

export const Results = (props) => {
	const {DATA, FPS_SCORECARD} = props;
	const ComponentFPS = {
		Display: {
			Start: 0,
			End: props.FPS_SCORECARD,
		},
		Players: {
			Start: 0,
			End: props.FPS_SCORECARD,
		},
	};
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<MatchContainer>
								{item.map((game, i) => (
									<BuildBasicNetballSingleGameResult 
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
