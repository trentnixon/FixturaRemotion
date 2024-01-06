import React from 'react';
import styled from 'styled-components';
import {Sequence, Series} from 'remotion';
import {Match} from './Sections';
import {MatchContainer} from './Sections/MatchContainer';

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 66%;
	margin: 0 0 0 32%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const FixturesMain = (props) => {
	const {DATA, FPS_SCORECARD, SectionHeights} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<FixtureContainer Height={SectionHeights.Body}>
			{groupsOfTwo.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<MatchContainer>
							{item.map((game, i) => (
								<Match
									key={`${'index'}_${i}`}
									INT={i}
									matchData={game}
									{...props}
								/>
							))}
						</MatchContainer>
					</Sequence>
				);
			})}
		</FixtureContainer>
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
