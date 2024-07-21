import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import {QLDCFixtureBuild} from './components/QLDCFixtureBuild';
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
	width: 90%;
	margin: 0 0 0 8%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const QLDCSingleFixtureResultMap = (props) => {
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
								<QLDCFixtureBuild key={`${index}_${i}`} INT={i} matchData={game} />
							))}
						</MatchContainerStyles>
					</Sequence>
				);
			})}
		</ResultsContainer>
	);
};
