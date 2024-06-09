import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import {Match} from './Sections';

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;

`;
const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 90%;
	margin: 0 0 0 8%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD, SectionHeights} = props;

	const sumObjectValues = (obj) => {
		return Object.values(obj).reduce((sum, value) => sum + value, 0);
	};
	return (
		<ResultsContainer Height={sumObjectValues(SectionHeights)}>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={(FPS_SCORECARD) * index}
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
