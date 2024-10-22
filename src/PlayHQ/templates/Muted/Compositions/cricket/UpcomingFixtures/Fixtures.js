import React from 'react';
import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {BuildFixturesTeamLogoTeamNameDefineColorsForBars} from '../../../../../structural/assets/upcoming/Builds/BuildFixturesTeamLogoTeamNameBars';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {useStylesContext} from '../../../../../context/StyleContext';
import {
	BuildMutedTeamVsTeamRows,
	BuildTeamVsTeamRows,
} from '../../../../../structural/assets/upcoming/Builds/BuildTeamVsTeamRows';

export const FixturesMain = ({groupedFixtures}) => {
	const {TIMINGS} = useLayoutContext();
	const {StyleConfig} = useStylesContext();

	const {Color} = StyleConfig;
	const {FPS_SCORECARD} = TIMINGS;
	return (
		<ContainerBodyHeight>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={FPS_SCORECARD}
						>
							<ContainerInnerBodyHeight>
								{item.map((game, i) => (
									<BuildMutedTeamVsTeamRows
										key={`${'index'}_${i}`}
										INT={i}
										matchData={game}
										barColors={['white', Color.Secondary.Main]}
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
