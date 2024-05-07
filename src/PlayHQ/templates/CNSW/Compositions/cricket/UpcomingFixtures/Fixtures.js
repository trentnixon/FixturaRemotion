import React from 'react';
import {Series} from 'remotion';
import {
	ContainerBodyHeight,
	ContainerInnerBodyHeight,
} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';
import {BuildFixturesTeamLogoTeamNameBars} from '../../../../../structural/assets/upcoming/Builds/BuildFixturesTeamLogoTeamNameBars';
export const FixturesMain = (props) => {
	const {DATA, FPS_SCORECARD} = props;
	const groupsOfTwo = splitIntoGroupsOfTwo(DATA);
	const StyleConfig = {Font: props.Font, Color: props.Color};
	return (
		<ContainerBodyHeight {...props}>
			<Series>
				{groupsOfTwo.map((item, index) => {
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
										{...props}
										StyleConfig={StyleConfig}
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

function splitIntoGroupsOfTwo(arr) {
	return arr.reduce((acc, curr, i) => {
		if (i % 2 === 0) {
			acc.push([curr]);
		} else {
			acc[acc.length - 1].push(curr);
		}
		return acc;
	}, []);
}
  