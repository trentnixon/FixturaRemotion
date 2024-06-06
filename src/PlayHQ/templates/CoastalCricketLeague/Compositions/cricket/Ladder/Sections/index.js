import {LadderContainer} from './LadderContainer';
import {LadderHeader} from './LadderHeader';
import {LadderPosition} from './LadderPosition';

export const LadderPositions = (props) => {
	const {Ladder} = props;

	return (
		<LadderContainer>
			<LadderHeader {...props} />
			{Ladder.League.map((position, i) => {
				return (
					<LadderPosition
						key={i}
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
