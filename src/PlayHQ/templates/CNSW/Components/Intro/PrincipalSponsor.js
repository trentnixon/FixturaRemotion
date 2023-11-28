import styled from 'styled-components';
import {Img} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {
	GetBackgroundContractColorForText,
	getContrastColor,
} from '../../../../utils/colors';
import useImageDimensions from '../../../../hooks/useImageDimensions';
import {HeaderLogo} from '../Header/Logo';

export const PrincipalSponsor = (props) => {
	const {FPS_INTRO, THEME, VIDEOMETA} = props;
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
			<PrincipalLogoInner>
				{/* <h1
					style={{
						fontFamily: 'Heebo',
						textAlign: 'right',
						fontSize: '2.5em',
						lineHeight: '1em',
						fontWeight: '400',
						width: '100%',
						margin: '0 30px 0 0',
						padding: 0,
						color: GetBackgroundContractColorForText(
							THEME.primary,
							THEME.secondary
						),
					}}
				>
					{getPrimarySponsor(VIDEOMETA.Club.Sponsors)?.Name}
				</h1>
				<h1
					style={{
						fontFamily: 'Heebo',
						textAlign: 'right',
						fontSize: '2em',
						lineHeight: '1em',
						fontWeight: '400',
						width: '100%',
						margin: '0 30px 0 0',
						padding: 0,
						color: getContrastColor(THEME.primary),
					}}
				>
					{getPrimarySponsor(VIDEOMETA.Club.Sponsors).Tagline}
				</h1> */}
			</PrincipalLogoInner>
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

export const PrincipalSponsorAlwaysShow = (props) => {
	const {fontFamily, VIDEOMETA, THEME} = props;
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
		<PrincipalLogo>
			<HeaderLogo LOGO={props.VIDEOMETA.Club.Logo} FPS_MAIN={props.FPS_MAIN} />
			<PrincipalLogoImg>
				<Img
					src={getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo}
					style={PrimarySponsorStyles}
				/>
			</PrincipalLogoImg>
		</PrincipalLogo>
	);
};

const PrincipalBodyLogo = styled.div`
	position: absolute;
	height: 120px;
	width: 100%;
	left: 5%;
	bottom: 10px;
	z-index: 2000;
	flex-direction: row;
	justify-content: flex-start;
	display: flex;
	align-items: center;
`;

export const PrincipalBodySponsor = (props) => {
	const {THEME, VIDEOMETA} = props;
	const getPrimarySponsor = (sponsorList) => {
		return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
	};
	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);

	if (!PrincipalSponsorIs) return false;

	const IMGSIZING = [110, 140, 110];
	const PrimarySponsorStyles = useImageDimensions(
		getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo,
		IMGSIZING
	);
	console.log(props.TIMINGS.FPS_INTRO);
	return (
		<PrincipalBodyLogo
			style={{
				transform: `translateY(${SpringToFrom(0, 1300, 0, 'Wobbly')}px)`,
				/* clipPath: EraseToMiddleFromTop(0 - 20, 'Slow'), */
			}}
		>
			<HeaderLogo LOGO={props.VIDEOMETA.Club.Logo} FPS_MAIN={props.FPS_MAIN} />

			<PrincipalLogoImg>
				<Img
					src={getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo}
					style={PrimarySponsorStyles}
				/>
			</PrincipalLogoImg>
		</PrincipalBodyLogo>
	);
};
