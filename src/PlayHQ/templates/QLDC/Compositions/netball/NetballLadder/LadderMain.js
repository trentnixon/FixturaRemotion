import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import {LadderPositions} from './Sections';
import {LadderContainer} from './Sections/LadderContainer';

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 75%;
	margin: 0 0 0 23%;
	height: ${(props) => props.Height}px;
	position: relative;
	top: 0px;
`;

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER, SectionHeights} = props;
	return (
		<FixtureContainer  Height={SectionHeights.Body}> 
			{DATA.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_LADDER}
						from={FPS_LADDER * index}
					>
						<LadderContainer> 
							<LadderPositions
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
								{...props}
							/>
						</LadderContainer>
					</Sequence>
				);
			})}
		</FixtureContainer>
	);
};
