import {LadderContainer} from './LadderContainer';
import {LadderHeader} from './LadderHeader';
import {LadderPosition} from './LadderPosition';

export const LadderPositions = (props) => {
	const {Ladder} = props;
	const LadderDataPoints = ['P', 'PTS', 'W', 'L', 'D', 'BYE'];
	return (
		<LadderContainer>
			<LadderHeader {...props} LadderDataPoints={LadderDataPoints} />
			{Ladder.League.map((position, i) => {
				console.log(i);
				return (
					<LadderPosition 
						key={i}
						LadderDataPoints={LadderDataPoints}
						LADDERINT={i}
						LadderItem={position}
						isTeam={position.teamName === Ladder.bias}
						{...props}
					/>
				);
			})}
		</LadderContainer>
	);
};
