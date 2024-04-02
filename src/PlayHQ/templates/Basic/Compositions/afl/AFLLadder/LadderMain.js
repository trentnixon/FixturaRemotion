import styled from 'styled-components';
import {Series} from 'remotion';
import {BuildBasicLadder} from '../../../../../structural/assets/ladder/Builds/BasicLadder/BuildBasicLadder';

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
const LadderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 950px;
	max-width: 100%;
	margin: 0 auto;
`;

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	return (
		<FixtureContainer>
			<Series>
				{DATA.map((item, index) => {
					return (
						<Series.Sequence key={index} durationInFrames={FPS_LADDER}>
							<LadderContainer>
								<BuildBasicLadder
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									CharacterLimit={40}
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

const LadderContainer = (props) => {
	return <LadderContainerStyles>{props.children}</LadderContainerStyles>;
};
