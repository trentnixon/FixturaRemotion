import styled from 'styled-components';
import {Img} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';

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

 
 
export const PrincipalSponsorAlwaysShow = (props) => {
	const {VIDEOMETA} = props;
	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);
	if (!PrincipalSponsorIs) return false;

	const IMGSIZING = [140, 180, 140];
	const PrimarySponsorStyles = calculateImageDimensions(
		getPrimarySponsor(VIDEOMETA.Club.Sponsors).logo,
		IMGSIZING
	);

	return (
		<PrincipalLogo>
			<PrincipalLogoImg>
				<Img
					src={getPrimarySponsor(VIDEOMETA.Club.Sponsors).logo}
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
	if (!PrincipalSponsorIs) return false;

	const PrimarySponsorStyles = calculateImageDimensions(
		PrincipalSponsorIs.logo,
		[100, 120, 100]
	);

	const AnimationStyles = {
		transform: `translateY(${SpringToFrom(0, 1300, 0, 'Wobbly')}px)`,
	};

	return (
		<ContainerFooterHeight {...props}>
			<PrincipalMainContentLogo style={AnimationStyles}>
				<PrincipalLogoImg>
					<ImageWithFallback
						src={PrincipalSponsorIs.logo}
						style={PrimarySponsorStyles}
					/>
				</PrincipalLogoImg>
			</PrincipalMainContentLogo> 
		</ContainerFooterHeight>
	);
};
