import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';

import {LadderPositions} from './Sections';
import {LadderContainer} from './Sections/LadderContainer';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	return (
		<FixtureContainer>
			<Series>
				{DATA.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_LADDER}>
							<LadderContainer>
								<LadderPositions
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									{...props}
								/>
							</LadderContainer>
						</Series.Sequence>
					);
				})}
			</Series>
		</FixtureContainer>
	);
};

const FixtureContainer = styled.div`
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
