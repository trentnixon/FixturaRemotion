import styled from 'styled-components';
import {Img} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import useImageDimensions from '../../../../hooks/useImageDimensions';
import {useCallback} from 'react';

export const PrincipalSponsor = (props) => {
	const {FPS_INTRO, VIDEOMETA} = props;
	const getPrimarySponsor = (sponsorList) => {
		return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
	};
	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);

	if (!PrincipalSponsorIs) return false;

	const IMGSIZING = [140, 180, 140];
	const PrimarySponsorStyles = useImageDimensions(
		getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo,
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
				<Img
					src={getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo}
					style={PrimarySponsorStyles}
				/>
			</PrincipalLogoImg>
		</PrincipalLogo>
	);
};

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

const PrincipalLogoInner = styled.div`
	flex-direction: column;
	justify-content: center;
	display: flex;
	align-items: center;
	width: auto;
`;

const PrincipalBodyLogoVersion2 = styled.div`
	display: flex;
	height: ${({container}) => container.height};
	width: ${({container}) => container.width};
	margin-right: ${({container}) => container.marginRight};
	margin-bottom: ${({container}) => container.marginBottom};
	z-index: ${({container}) => container.zIndex};
	flex-direction: ${({container}) => container.flexDirection};
	justify-content: ${({container}) => container.justifyContent};
	align-items: ${({container}) => container.alignItems};
	background-color: ${({container}) => container.backgroundColor};
	padding: ${({container}) => container.padding};
`;

const PrincipalLogoImgVersion2 = styled.div`
	flex-direction: column;
	justify-content: start;
	display: flex;
	align-items: start;
	width: auto;
`;

const LogoVersion2 = styled.div`
	width: ${({style}) => style.width};
	height: ${({style}) => style.height};
	display: flex;
	align-items: center;
	justify-content: center;
	padding-right: ${({style}) => style.paddingRight};
	margin-right: ${({style}) => style.marginRight};
	border-right: ${({style}) => style.borderRight};
	margin-top: ${({style}) => style.marginTop};
`;

export const PrincipalBodySponsorVersion2 = (props) => {
	const {VIDEOMETA, FPS_MAIN, SectionHeights} = props;
	if (!VIDEOMETA || !FPS_MAIN) {
		return null;
	}
	const SponsorStyleOBJ = {
		container: {
			height: `${SectionHeights.Footer}px`,
			width: '100%',
			zIndex: '2000',
			padding: '5px 30px',
			flexDirection: 'row',
			justifyContent: 'flex-end',
			alignItems: 'center',
			backgroundColor: 'transparent',
		},
		logo: {
			padding: '10px',
			borderRight: `${SpringToFrom(0, 0, 3, 'slow')}px solid white`,
			transform: `translateY(${SpringToFrom(0, 500, 0, 'Wobbly')}px)`,
		},
		sponsorImage: {
			padding: '10px',
			transform: `translateY(${SpringToFrom(7, 500, 0, 'Wobbly')}px)`,
		},
	};

	const getPrimarySponsor = useCallback(
		(sponsorList) => sponsorList?.find((sponsor) => sponsor.isPrimary === true),
		[]
	);

	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);
	if (!PrincipalSponsorIs) return null;

	const primarySponsorStyles = useImageDimensions(
		PrincipalSponsorIs.Logo,
		[110, 110, 110]
	);

	return (
		<PrincipalBodyLogoVersion2 container={SponsorStyleOBJ.container}>
			<LogoVersion2 style={SponsorStyleOBJ.logo}>
				<Img
					src={VIDEOMETA.Club.Logo}
					width="100%"
					style={{...primarySponsorStyles, borderRadius: '10%'}}
				/>
			</LogoVersion2>
			<PrincipalLogoImgVersion2 style={SponsorStyleOBJ.sponsorImage}>
				<Img
					src={PrincipalSponsorIs.Logo}
					style={{...primarySponsorStyles, borderRadius: '10%'}}
				/>
			</PrincipalLogoImgVersion2>
		</PrincipalBodyLogoVersion2>
	);
};
