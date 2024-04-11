import {CreateLadderHeader} from '../../../LadderGradeTitle/LadderHeader';

export const LadderHeader = (props) => {
	const {Ladder, LadderDataPoints, SectionHeights} = props;

	const NumTeams = Ladder.League.length + 1;
	const ContainerHeight = (SectionHeights.Body-60);

	const findLadderPositionContainerHeight =
		(ContainerHeight / NumTeams - 4) / 2;
	return (
		<>
			<CreateLadderHeader
				LadderDataPoints={LadderDataPoints}
				ContainerHeight={ContainerHeight}
				LadderPositionContainerHeight={findLadderPositionContainerHeight}
				{...props}
			/>
		</>
	);
};
