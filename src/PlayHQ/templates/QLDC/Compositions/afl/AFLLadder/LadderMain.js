import React from 'react';
import styled from 'styled-components';
import {Sequence} from 'remotion';
import {BuildBasicLadder} from '../../../../../structural/assets/ladder/Builds/BasicLadder/BuildBasicLadder';

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

const LadderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 1040px;
	max-width: 100%;
	margin: 0 auto;
`;

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER, SectionHeights} = props;
	return (
		<FixtureContainer Height={SectionHeights.Body}>
			{DATA.map((item, index) => {
				return (
					<Sequence
						key={index}
						durationInFrames={FPS_LADDER}
						from={FPS_LADDER * index}
					>
						<LadderContainer>
							<BuildBasicLadder
								key={`${index}_${index}`}
								INT={index}
								Ladder={item}
								CharacterLimit={25}
								{...props}
							/>
						</LadderContainer>
					</Sequence>
				);
			})}
		</FixtureContainer>
	);
};

const LadderContainer = (props) => {
	return <LadderContainerStyles>{props.children}</LadderContainerStyles>;
};
