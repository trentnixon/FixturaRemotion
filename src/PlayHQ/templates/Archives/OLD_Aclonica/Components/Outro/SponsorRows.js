import {Img} from 'remotion';
import styled from 'styled-components';

import {useCurrentFrame} from 'remotion';

import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {getContrastColor, darkenColor, GetBackgroundContractColorForText} from '../../../../../utils/colors';

const SponsorsNameContianer = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	display: flex;
`;

const TitleSponsorImg = styled.div`
	width: 100%;
	margin-bottom: 10px;
	text-align: center;
`;
const SponsorImg = styled.div`
	width: 50%;
	margin-bottom: 40px;
	text-align: center;
`;

export const SponsorRows = ({DATA, fontFamily, theme, FPS}) => {
	const frame = useCurrentFrame();
	const findPrimarySponsor = (sponsors, value) => {
		return sponsors.find((sponsor) => sponsor.isPrimary === value);
	};
	const filterPrimarySponsor = (sponsors, value) => {
		return sponsors.filter((sponsor) => sponsor.isPrimary === value);
	};

	// Determine the number of sponsors
	const sponsorCount = DATA.VIDEOMETA.Club.Sponsors.length;
	const primarySponsor = findPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors, true);
	// Initialize styles based on the number of sponsors
	let containerStyles = {};
	let SupportingSponsors = {};
	if (sponsorCount === 1) {
		containerStyles = {
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
		};
	} else if (sponsorCount === 2) {
		containerStyles = {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
		};
		SupportingSponsors = {
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
		};
	} else if (sponsorCount > 2) {
		containerStyles = {
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			alignContent: 'center',
		};
		SupportingSponsors = {
			width: '100%',
			display: 'flex',
			flexDirection: 'row',
			justifyContent: 'center',
			flexWrap: 'wrap',
		};
	}

	if (!primarySponsor) return null;

	return (
		<SponsorsNameContianer style={containerStyles}>
			<TitleSponsorImg>
				<SponsorLogo src={primarySponsor.Logo} frame={frame} FPS={FPS} />
				<SponsorTitle
					name={primarySponsor.Name}
					fontFamily={fontFamily}
					frame={frame}
					FPS={FPS}
					theme={theme}
				/>
				<SponsorTagline
					tagline={primarySponsor.Tagline}
					fontFamily={fontFamily}
					frame={frame}
					FPS={FPS}
					theme={theme}
				/>
			</TitleSponsorImg>

			<div style={SupportingSponsors}>
				{filterPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors, false).map(
					(s, i) => (
						<SponsorImg key={i}>
							<SponsorLogo
								src={s.Logo}
								frame={frame}
								FPS={FPS}
								Height="200px"
							/>
							<SponsorTitle
								name={s.Name}
								fontFamily={fontFamily}
								frame={frame}
								FPS={FPS}
								theme={theme}
							/>
							<SponsorTagline
								tagline={s.Tagline}
								fontFamily={fontFamily}
								frame={frame}
								FPS={FPS}
								theme={theme}
							/>
						</SponsorImg>
					)
				)}
			</div>
		</SponsorsNameContianer>
	);
};

const SponsorLogo = ({src, frame, FPS, Height = '300px'}) => {
	return (
		<Img
			src={src}
			style={{
				clipPath: FromTopToBottom(25, 'Wobbly'),
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
				maxHeight: Height,
				height: Height,
				marginBottom:'10px',
			}}
		/>
	);
};

const SponsorTitle = ({name, fontFamily, frame, FPS, theme}) => {
	return (
		<h1
			style={{
				fontFamily,
				fontSize: '2em',
				lineHeight: '1em',
				fontFamily: 'Heebo',
				margin: 0,
				padding: 0,
				clipPath: FromTopToBottom(25, 'Wobbly'),
				color: GetBackgroundContractColorForText(theme.primary,theme.secondary),
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
			}}
		>
			{name}
		</h1>
	);
};

const SponsorTagline = ({tagline, fontFamily, frame, FPS, theme}) => {
	return (
		<p
			style={{
				fontFamily,
				fontSize: '1.8em',
				lineHeight: '.9em',
				fontFamily: 'Heebo',
				margin: 0,
				padding: 0,
				clipPath: FromTopToBottom(25, 'Wobbly'),
				color: GetBackgroundContractColorForText(theme.primary,theme.secondary),
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
			}}
		>
			{tagline}
		</p>
	);
};
