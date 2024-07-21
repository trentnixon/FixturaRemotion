import {LadderContainer} from './components/LadderContainer';
import {LadderHeader} from './components/LadderHeader';
import {LadderPosition} from './components/LadderPosition';

export const CricketCCLLadderInnerMap = ({Ladder}) => {
	return (
		<LadderContainer>
			<LadderHeader Ladder={Ladder} />
			{Ladder.League.map((position, i) => {
				return (
					<LadderPosition
						key={i}
						LADDERINT={i}
						LadderItem={position}
						isTeam={position.teamName === Ladder.bias}
						Ladder={Ladder}
					/>
				);
			})}
		</LadderContainer>
	);
};
