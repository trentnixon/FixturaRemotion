import {LadderContainer} from './LadderContainer';
import {HeaderContainer} from './HeaderContainer';
import {LadderHeader} from './LadderHeader';
import {LadderPosition} from './LadderPosition';


export const LadderPositions = ({Ladder, THEME, fontFamily, FPS_LADDER}) => {

	console.log(Ladder.competition)
	return (
		<>
			<HeaderContainer
				Title={Ladder.name}
				competition={Ladder.competition}
				FPS_LADDER={FPS_LADDER}
				THEME={THEME}
				fontFamily={fontFamily}
			/>
			<LadderContainer THEME={THEME} fontFamily={fontFamily}>
				<LadderHeader
					THEME={THEME}
					fontFamily={fontFamily}
					NumTeams={Ladder.League.length + 1}
					FPS_LADDER={FPS_LADDER}
				/>
				{Ladder.League.map((position, i) => {
					return (
						<LadderPosition
							key={i}
							INT={i}
							LadderItem={position}
							isTeam={position.teamName === Ladder.bias}
							THEME={THEME}
							fontFamily={fontFamily}
							NumTeams={Ladder.League.length + 1}
							FPS_LADDER={FPS_LADDER}
						/>
					);
				})}
			</LadderContainer>
		</>
	);
};
