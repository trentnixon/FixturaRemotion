import React from 'react';
import styled from 'styled-components';
import {Series} from 'remotion';

import {LadderPositions} from './Sections';
import {LadderContainer} from './Sections/LadderContainer';
import {ContainerBodyHeight} from '../../../../../structural/assets/common/Containers/ContainerBodyHeight';

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
							<LadderContainer>
								<LadderPositions
									key={`${index}_${index}`}
									INT={index}
									Ladder={item}
									{...props}
								/>
							</LadderContainer>
						</Series.Sequence>
					);
				})}
			</Series>
		</ContainerBodyHeight>
	);
};
