import styled from 'styled-components';
import {HeaderContainer} from './components/HeaderContainer';
import {LadderPosition} from './components/LadderPosition';
import {LadderHeader} from './components/LadderHeader';

export const BuildMutedLadder = (props) => {
	const {Ladder, LadderDataPoints} = props;
	return (
		<>
			<HeaderContainer {...props} />
			<LadderContainer>
				<LadderHeader {...props} LadderDataPoints={LadderDataPoints} />
				{Ladder.League.map((position, i) => {
					return (
						<LadderPosition
							key={i}
							LADDERINT={i}
							LadderDataPoints={LadderDataPoints}
							LadderItem={position}
							isTeam={position.teamName === Ladder.bias}
							{...props}
						/>
					);
				})}
			</LadderContainer>
		</>
	);
};

const LadderContainerStyles = styled.div`
	display: flex;
	flex-direction: column;
	width: 700px;
	height: 950px;
	max-width: 100%;
`;

export const LadderContainer = (props) => {
	return <LadderContainerStyles>{props.children}</LadderContainerStyles>;
};
