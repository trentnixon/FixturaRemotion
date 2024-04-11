import {Series} from 'remotion';
import {BuildBasicLadder} from '../../../../../structural/assets/ladder/Builds/BasicLadder/BuildBasicLadder';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const LadderMain = (props) => {
	const {DATA, FPS_LADDER} = props;
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
								<BuildBasicLadder
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									CharacterLimit={40}
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
