import {Series} from 'remotion';

import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import { AFLBasicResultRow } from '../../../../../structural/builds/results/AFLBasicResultRow';

export const Results = (props) => {
	const {groupedFixtures, FPS_SCORECARD} = props;
	const StyleConfig = {Font: props.Font, Color: props.Color};

	const TransitionShift = 45;
	const ComponentFPS = {
		Display: {
			Start: 15,
			End: props.FPS_SCORECARD / 2 + TransitionShift,
		},
		Players: {
			Start: props.FPS_SCORECARD / 2 + TransitionShift,
			End: props.FPS_SCORECARD,
		},
	};
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence key={index} layout='none' durationInFrames={FPS_SCORECARD}>
							<ContainerInnerBodyHeight {...props}>
								{item.map((game, i) => (
									<AFLBasicResultRow
										key={`${index}_${i}`}
										INT={i}
										matchData={game}
										ComponentFPS={ComponentFPS}
										StyleConfig={StyleConfig}
										{...props}
									/>
								))}
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
