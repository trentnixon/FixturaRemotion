import React from 'react';
import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {useLayoutContext} from '../../../../../context/LayoutContext';
import {BuildCaloundraCCFixturesTeamLogoSingleRow} from '../../../../../structural/assets/upcoming/Builds/BuildCaloundraCCFixturesTeamLogoSingleRow';
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
									<BuildCaloundraCCFixturesTeamLogoSingleRow
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
