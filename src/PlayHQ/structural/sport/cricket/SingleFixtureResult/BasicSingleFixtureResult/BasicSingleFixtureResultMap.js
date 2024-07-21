import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {ContainerBodyHeight} from '../../../../assets/common/Containers/ContainerBodyHeight';
import {BasicFixtureBuild} from './components/BasicFixtureBuild';

export const BasicSingleFixtureResultMap = ({groupedFixtures}) => {
	const {TIMINGS} = useLayoutContext();
	return (
		<ContainerBodyHeight>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							layout="none"
							durationInFrames={TIMINGS.FPS_SCORECARD}
						>
							<MatchContainer>
								{item.map((game, i) => (
									<BasicFixtureBuild key={`${index}_${i}`} INT={i} matchData={game} />
								))}
							</MatchContainer>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};

const MatchContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
	max-width: 100%;
	margin: 0 auto;
	margin-bottom: 0px;
`;
