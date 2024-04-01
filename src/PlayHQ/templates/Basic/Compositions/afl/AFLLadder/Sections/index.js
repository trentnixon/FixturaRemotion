import {LadderContainer} from './LadderContainer';
import {HeaderContainer} from './HeaderContainer';
import {LadderHeader} from './LadderHeader';
import {LadderPosition} from './LadderPosition';

export const LadderPositions = (props) => {
	const {Ladder} = props;
	const LadderDataPoints = ['P', 'PA', 'PTS', 'W', 'L', 'D', 'BYE'];
	return (
		<> 
			<HeaderContainer {...props} />
			<LadderContainer>
				<LadderHeader {...props} LadderDataPoints={LadderDataPoints}/>
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
