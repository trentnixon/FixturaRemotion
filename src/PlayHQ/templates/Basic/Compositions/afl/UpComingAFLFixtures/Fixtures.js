import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';

import { AFLMatchContainer } from '../../../../../structural/sport/afl/Containers/AFLMatchContainer';
import { BuildFixturesTeamLogoTeamNameBars } from '../../../../../structural/assets/upcoming/Builds/BuildFixturesTeamLogoTeamNameBars';

export const FixturesMain = (props) => {
	const {DATA, FPS_SCORECARD} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	return (
		<FixtureContainer>
			<Series>
				{groupsOfTwo.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_SCORECARD}>
							<AFLMatchContainer MarginBottom="150px">
								{item.map((game, i) => (
									<BuildFixturesTeamLogoTeamNameBars
										key={`${'index'}_${i}`}
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

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 96%;
	margin: 0 2%;
	height: auto;
	position: relative;
	top: 240px;
`;
