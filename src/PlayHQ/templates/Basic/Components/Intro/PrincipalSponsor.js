import styled from 'styled-components';
import {Img} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';

import {getPrimarySponsor} from '../Common/getPrimarySponsor';
import {calculateImageDimensions} from '../../../../utils/global/calculateImageDimensions';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {ContainerFooterHeight} from '../../../../structural/assets/common/Containers/ContainerFooterHeight';

const PrincipalMainContentLogo = styled.div``;
const PrincipalLogo = styled.div`
	position: absolute;
	height: 150px;
	width: 100%;
	left: 0px;
	bottom: 3px;

	z-index: 2000;
	flex-direction: row;
	justify-content: center;
	display: flex;
	align-items: center;
`;

const PrincipalLogoImg = styled.div`
	flex-direction: column;
	justify-content: start;
	display: flex;
	align-items: start;
	width: auto;
`;

export const PrincipalSponsor = (props) => {
	const {FPS_INTRO, VIDEOMETA} = props;
	const getPrimarySponsor = (sponsorList) => {
		return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
	};
	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);

	if (!PrincipalSponsorIs) return false;

	const IMGSIZING = [140, 180, 140];
	const PrimarySponsorStyles = calculateImageDimensions(
		PrincipalSponsorIs.Logo,
		IMGSIZING
	);

	return (
		<PrincipalLogo
			style={{
				transform: `translateY(${SpringToFrom(0, 300, 0, 'Wobbly')}px)`,
				clipPath: EraseToMiddleFromTop(FPS_INTRO - 20, 'Slow'),
			}}
		>
			<PrincipalLogoImg>
				<ImageWithFallback
					src={PrincipalSponsorIs.Logo}
					style={PrimarySponsorStyles}
				/>
			</PrincipalLogoImg>
		</PrincipalLogo>
	);
};

export const PrincipalSponsorAlwaysShow = (props) => {
	const {VIDEOMETA} = props;

	const getPrimarySponsor = (sponsorList) => {
		return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
	};
	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);

	if (!PrincipalSponsorIs) return false;

	const IMGSIZING = [140, 180, 140];
	const PrimarySponsorStyles = calculateImageDimensions(
		getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo,
		IMGSIZING
	);

	return (
		<PrincipalLogo>
			<PrincipalLogoImg>
				<Img
					src={getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo}
					style={PrimarySponsorStyles}
				/>
			</PrincipalLogoImg>
		</PrincipalLogo>
	);
};

export const PrincipalBodySponsor = (props) => {
	const {Sponsors} = props.VIDEOMETA.Club;
	if (Sponsors.length === 0) return false;
	const PrincipalSponsorIs = getPrimarySponsor(Sponsors);
	const PrimarySponsorStyles = calculateImageDimensions(
		PrincipalSponsorIs.Logo,
		[100, 120, 100]
	);

	const AnimationStyles = {
		transform: `translateY(${SpringToFrom(0, 1300, 0, 'Wobbly')}px)`,
	};

	if (!PrincipalSponsorIs) return false;
	return (
		<ContainerFooterHeight {...props}>
			<PrincipalMainContentLogo style={AnimationStyles}>
				<PrincipalLogoImg>
					<ImageWithFallback
						src={PrincipalSponsorIs.Logo}
						style={PrimarySponsorStyles}
					/>
				</PrincipalLogoImg>
			</PrincipalMainContentLogo>
		</ContainerFooterHeight>
	);
};
