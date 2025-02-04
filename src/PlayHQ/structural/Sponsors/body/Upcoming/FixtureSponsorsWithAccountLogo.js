import React from 'react';
import {Series} from 'remotion';
import styled from 'styled-components';
import {calculateImageDimensions, groupSponsors} from '../../Utils/utils';
import {ContainerFooterHeight} from '../../../assets/common/Containers/ContainerFooterHeight';
import SponsorLogo from '../components/SponsorLogo';
import SponsorRow from '../components/SponsorRow';
import {HeaderLogo} from '../../../../templates/CNSW/Components/Header/Logo';
import {useVideoDataContext} from '../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../context/LayoutContext';

const SponsorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px;
`;

const FixtureSponsorsWithAccountLogo = ({groupedSponsors}) => {
	const {DATA} = useVideoDataContext();

	const {TIMINGS, SponsorPositionAndAnimations} = useLayoutContext();
	const {VIDEOMETA} = DATA;
	const {FPS_MAIN, FPS_SCORECARD} = TIMINGS;

	if (!groupedSponsors) {
		console.error('Invalid data structure for grouped sponsors');
		return null;
	}

	return (
		<Series>
			{groupedSponsors.map((sponsorGroup, sponsorGroupIndex) => {
				const groupedSponsorsByRow = groupSponsors(sponsorGroup, 6);
				const imgSize = [110, 110, 110];

				return (
					<Series.Sequence
						key={sponsorGroupIndex}
						layout="none"
						durationInFrames={FPS_SCORECARD}
					>
						<ContainerFooterHeight>
							{groupedSponsorsByRow.map((row, rowIndex) => (
								<SponsorRow
									key={rowIndex}
									align={SponsorPositionAndAnimations.alignSponsors}
								>
									<SponsorImg>
										<HeaderLogo
											LOGO={VIDEOMETA.Club.Logo.url}
											FPS_MAIN={FPS_MAIN}
										/>
									</SponsorImg>
									{row.map((s, index) => (
										<SponsorImg key={index}>
											<SponsorLogo
												IMGStyles={calculateImageDimensions(s.logo, imgSize)}
												src={s.logo.url}
												FPS={FPS_SCORECARD}
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

export default FixtureSponsorsWithAccountLogo;
