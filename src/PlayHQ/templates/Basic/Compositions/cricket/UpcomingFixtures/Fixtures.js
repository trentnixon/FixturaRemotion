import React from 'react';
import {Series} from 'remotion';
import {BuildFixturesTeamLogoTeamNameBars} from '../../../../../structural/assets/upcoming/Builds/BuildFixturesTeamLogoTeamNameBars';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
export const FixturesMain = (props) => {
	const {groupedFixtures} = props;
	const {TIMINGS} = useLayoutContext();
	return (
		<ContainerBodyHeight>
			<Series>
				{groupedFixtures.map((item, index) => {
					return (
						<Series.Sequence
							key={index}
							layout="none"
							durationInFrames={TIMINGS.FPS_SCORECARD}
						>
							<ContainerInnerBodyHeight>
								{item.map((game, i) => (
									<BuildFixturesTeamLogoTeamNameBars
										key={`${'index'}_${i}`}
										INT={i}
										matchData={game}
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
