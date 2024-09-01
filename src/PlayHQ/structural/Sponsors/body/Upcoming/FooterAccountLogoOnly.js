import React from 'react';
import styled from 'styled-components';
import {ContainerFooterHeight} from '../../../assets/common/Containers/ContainerFooterHeight';
import SponsorRow from '../components/SponsorRow';
import {HeaderLogo} from '../../../../templates/Sixers/Components/Header/Logo';
import {useVideoDataContext} from '../../../../context/VideoDataContext';
import {useLayoutContext} from '../../../../context/LayoutContext';
const SponsorImg = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0;
	margin-top: -30px;
	margin-left: 20px;
`;

const FooterAccountLogoOnly = () => {
	const {DATA} = useVideoDataContext();

	const {TIMINGS, SponsorPositionAndAnimations} = useLayoutContext();
	const {VIDEOMETA} = DATA;
	const {FPS_MAIN} = TIMINGS;

	return (
		<ContainerFooterHeight>
			<SponsorRow align={SponsorPositionAndAnimations.alignSponsors}>
				<SponsorImg>
					<HeaderLogo LOGO={VIDEOMETA.Club.Logo} FPS_MAIN={FPS_MAIN} />
				</SponsorImg>
			</SponsorRow>
		</ContainerFooterHeight>
	);
};

export default FooterAccountLogoOnly;
