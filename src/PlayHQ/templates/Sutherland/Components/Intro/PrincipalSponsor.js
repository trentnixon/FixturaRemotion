import styled from 'styled-components';
import {Img} from 'remotion';
import {SpringToFrom} from '../../../../Animation/RemotionSpring';
import {EraseToMiddleFromTop} from '../../../../Animation/ClipWipe';
import {
	GetBackgroundContractColorForText,
	getContrastColor,
	getTitleColorOverGradient,
} from '../../../../utils/colors';
import useImageDimensions from '../../../../hooks/useImageDimensions';

export const PrincipalSponsor = ({FPS_INTRO, VIDEOMETA, THEME}) => {
	const getPrimarySponsor = (sponsorList) => {
		console.log(sponsorList);
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
				<h1
					style={{
						fontFamily: 'Heebo',
						textAlign: 'right',
						fontSize: '2.5em',
						lineHeight: '1em',
						fontWeight: '400',
						width: '100%',
						margin: '0 30px 0 0',
						padding: 0,
						color: getContrastColor(THEME.primary),
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
				</h1>
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
	height: 200px;
	width: 100%;
	left: 0px;
	bottom: 5px;

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
		console.log(sponsorList);
		return sponsorList?.find((sponsor) => sponsor.isPrimary === true);
	};
	const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);

	if (!PrincipalSponsorIs) return false;

	const IMGSIZING = [120, 160, 120];
	const PrimarySponsorStyles = useImageDimensions(
		getPrimarySponsor(VIDEOMETA.Club.Sponsors).Logo,
		IMGSIZING
	);

	return (
		<PrincipalLogo>
			<PrincipalLogoInner>
				<h1
					style={{
						fontFamily,
						textAlign: 'right',
						fontSize: '2.5em',
						lineHeight: '1em',
						fontWeight: '400',
						width: '100%',
						margin: '0 30px 0 0',
						padding: 0,
						color: getContrastColor(THEME.primary),
					}}
				>
					{getPrimarySponsor(VIDEOMETA.Club.Sponsors)?.Name}
				</h1>
				<h1
					style={{
						fontFamily,
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
				</h1>
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
