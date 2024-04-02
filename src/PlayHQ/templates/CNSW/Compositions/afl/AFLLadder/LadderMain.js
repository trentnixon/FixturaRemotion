import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';
import {BuildBasicLadderV2} from '../../../../../structural/assets/ladder/Builds/BasicLadderV2/BuildBasicLadderV2';

const LadderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 950px;
	max-width: 100%;
	margin: 0 auto;
`;

const FixtureContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	width: 96%;
	margin: 0 2%;
	height: 950px;
	position: relative;
	top: 280px;
`;

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};
	const LadderDataPoints = ['P', 'PA', 'PTS', 'W', 'L', 'D', 'BYE'];
	return (
		<FixtureContainer>
			<Series>
				{DATA.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_LADDER}>
							<LadderContainerStyles>
								<BuildBasicLadderV2
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									StyleConfig={StyleConfig}
									LadderDataPoints={LadderDataPoints}
									{...props}
								/>
							</LadderContainerStyles>
						</Series.Sequence>
					);
				})}
			</Series>
		</FixtureContainer>
	);
};