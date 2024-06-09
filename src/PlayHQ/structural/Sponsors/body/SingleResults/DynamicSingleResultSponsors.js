// src/structural/Sponsors/body/Upcoming/DynamicFixtureSponsors.js

import React from 'react';
import {Series, Img} from 'remotion';
import styled from 'styled-components';
import {calculateImageDimensions, groupSponsors} from '../../Utils/utils';
import {ContainerFooterHeight} from '../../../assets/common/Containers/ContainerFooterHeight';
import SponsorRow from '../components/SponsorRow';

const SponsorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

const SponsorLogo = ({src, IMGStyles}) => {
	return (
		<Img
			src={src}
			style={{
				height: IMGStyles.height,
				width: IMGStyles.width,
				marginBottom: '10px',
			}}
		/>
	);
};

const DynamicSingleResultSponsors = (props) => {
	const {groupedSponsors, FPS_SCORECARD, SponsorPositionAndAnimations} = props;

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
						durationInFrames={FPS_SCORECARD}
					>
						<ContainerFooterHeight {...props}>
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

export default DynamicSingleResultSponsors;
