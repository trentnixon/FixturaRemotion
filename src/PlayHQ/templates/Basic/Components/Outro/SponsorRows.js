import {Img} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {interpolateOpacityByFrame} from '../../../../Animation/interpolate';
import {FromTopToBottom} from '../../../../Animation/ClipWipe';
import { calculateImageDimensions } from '../../../../utils/global/calculateImageDimensions';

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

export const SponsorRows = (props) => {
	const {DATA, FPS} = props;
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
	const PRIMARYIMGSIZING = [500, 500, 500];
	const IMGSIZING = [300, 300, 300];
	
	const LogoSize = calculateImageDimensions(primarySponsor.Logo, PRIMARYIMGSIZING);
	return (
		<SponsorsNameContianer style={containerStyles}>
			<TitleSponsorImg>
				<SponsorLogo
					IMGStyles={LogoSize}
					src={primarySponsor.Logo.url}
					frame={frame}
					FPS={FPS}
				/>
			</TitleSponsorImg>

			<div style={SupportingSponsors}>
				{filterPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors, false).map(
					(s, i) => (
						<SponsorImg key={i}>
							<SponsorLogo
								IMGStyles={calculateImageDimensions(s.Logo, IMGSIZING)}
								src={s.Logo.url}
								frame={frame}
								FPS={FPS}
								Height="100px"
							/>
						</SponsorImg>
					)
				)}
			</div>
		</SponsorsNameContianer>
	);
};

const SponsorLogo = ({src, frame, FPS, IMGStyles}) => {
	return (
		<Img
			src={src}
			style={{
				clipPath: FromTopToBottom(25, 'Wobbly'),
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),

				height: IMGStyles.height,
				width: IMGStyles.width,
				marginBottom: '10px',
			}}
		/>
	);
};
