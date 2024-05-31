import {Series} from 'remotion';
import {BuildFixturesTeamLogoTeamNameBars} from '../../../../../structural/assets/upcoming/Builds/BuildFixturesTeamLogoTeamNameBars';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

export const FixturesMain = (props) => {
	const {groupedFixtures, FPS_SCORECARD} = props;

	const StyleConfig = {Font: props.Font, Color: props.Color};
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_SCORECARD}
						>
							<ContainerInnerBodyHeight {...props}>
								{item.map((game, i) => (
									<BuildFixturesTeamLogoTeamNameBars
										key={`${'index'}_${i}`}
										INT={i}
										matchData={game}
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
