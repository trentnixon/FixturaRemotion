// src/structural/Sponsors/body/Upcoming/DynamicFixtureSponsors.js

import React from 'react';
import {Series, Img} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';

import {calculateImageDimensions, groupSponsors} from '../../Utils/utils';
import {ContainerFooterHeight} from '../../../assets/common/Containers/ContainerFooterHeight';
import SponsorRow from '../components/SponsorRow';
import {useLayoutContext} from '../../../../context/LayoutContext';

const SponsorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
	z-index: 2000;
`;

const SponsorLogo = ({src, FPS, IMGStyles, delay}) => {
	const frame = useCurrentFrame();
	return (
		<Img
			src={src}
			style={{
				clipPath: FromTopToBottom(10 + delay, 'Wobbly'),
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
				height: IMGStyles.height,
				width: IMGStyles.width,
				marginBottom: '10px',
			}}
		/>
	);
};

const DynamicLadderSponsors = ({groupedSponsors}) => {
	const {TIMINGS, SponsorPositionAndAnimations} = useLayoutContext();
	const {FPS_LADDER} = TIMINGS;
	if (!groupedSponsors) {
		console.error('Invalid data structure for grouped sponsors');
		return null;
	}

	return (
		<Series>
			{groupedSponsors.map((sponsorGroup, sponsorGroupIndex) => {
				const groupedSponsorsByRow = groupSponsors(sponsorGroup);
				const imgSize = [110, 110, 110];

				return (
					<Series.Sequence
						key={sponsorGroupIndex}
						layout="none"
						durationInFrames={FPS_LADDER}
					>
						<ContainerFooterHeight>
							{groupedSponsorsByRow.map((row, rowIndex) => (
								<SponsorRow
									key={rowIndex}
									align={SponsorPositionAndAnimations.alignSponsors}
								>
									{row.map((s, index) => (
										<SponsorImg
											key={index}
											width={`calc(100% / ${row.length})`}
										>
											<SponsorLogo
												IMGStyles={calculateImageDimensions(s.logo, imgSize)}
												src={s.logo.url}
												FPS={FPS_LADDER}
												delay={(index + 1) * 5}
												animationType={
													SponsorPositionAndAnimations.animationType
												}
											/>
										</SponsorImg>
									))}
								</SponsorRow>
							))}
						</ContainerFooterHeight>
					</Series.Sequence>
				);
			})}
		</Series>
	);
};

export default DynamicLadderSponsors;
