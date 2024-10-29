import {CreateLadderHeaderMuted} from '../../../LadderGradeTitle/LadderHeaderMuted';

export const LadderHeader = (props) => {
	const {Ladder, LadderDataPoints} = props;

	const NumTeams = Ladder.League.length + 1;

	const ContainerHeight = 1200;

	const findLadderPositionContainerHeight =
		(ContainerHeight / NumTeams - 4) / 2;
	return (
		<>
			<CreateLadderHeaderMuted
				LadderDataPoints={LadderDataPoints}
				ContainerHeight={ContainerHeight}
				LadderPositionContainerHeight={findLadderPositionContainerHeight}
				{...props}
			/>
		</>
	);
};
