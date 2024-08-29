import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useVideoDataContext} from '../../../../../context/VideoDataContext';
import {SixersRosterBuild} from './SixersRosterBuild';
import {RosterContainer} from './components/RosterContainer';

export const SixersRosterMap = () => {
	const {TIMINGS} = useLayoutContext();
	const {DATA} = useVideoDataContext();
	const {FPS_SCORECARD} = TIMINGS;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA.DATA);
	return (
		<ResultsContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence durationInFrames={FPS_SCORECARD}>
							<RosterContainer>
								{item.map((game, i) => (
									<SixersRosterBuild
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
									/>
								))}
							</RosterContainer>
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

const ResultsContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 100%;
	margin: 0%;
	position: relative;
	top: 0px;
`;
