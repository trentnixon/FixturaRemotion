import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {BuildBasicLadderV2} from '../../../../../structural/assets/ladder/Builds/BasicLadderV2/BuildBasicLadderV2';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
	const LadderDataPoints = ['P', 'PA', 'PTS', 'W', 'L', 'D', 'BYE'];
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{DATA.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_LADDER}
						>
							<ContainerInnerBodyHeight {...props}>
								<BuildBasicLadderV2
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									CharacterLimit={40}
									LadderDataPoints={LadderDataPoints}
									{...props}
								/>
							</ContainerInnerBodyHeight>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
