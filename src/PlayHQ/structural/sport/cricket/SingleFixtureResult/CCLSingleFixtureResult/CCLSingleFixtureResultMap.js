import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import {CCLFixtureBuild} from './components/CCLFixtureBuild';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const MatchContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
`;
const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin: 0%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const CCLSingleFixtureResultMap = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS, Heights} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;

	return (
		<ResultsContainer Height={Heights.AssetHeight}>
			{groupedFixtures.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_SCORECARD}
						from={FPS_SCORECARD * index}
					>
						<MatchContainerStyles>
							{item.map((game, i) => (
								<CCLFixtureBuild key={`${index}_${i}`} INT={i} matchData={game} />
							))}
						</MatchContainerStyles>
					</Sequence>
				);
			})}
		</ResultsContainer>
	);
};
