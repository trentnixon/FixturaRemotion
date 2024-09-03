import {useLayoutContext} from '../../../../../../context/LayoutContext';
import {CreateLadderHeader} from '../../../LadderGradeTitle/LadderHeader';

export const LadderHeader = (props) => {
	const {Ladder, LadderDataPoints} = props;
	const {Heights} = useLayoutContext();
	const NumTeams = Ladder.League.length + 1;
	const ContainerHeight = Heights.AssetHeight - 100;

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
