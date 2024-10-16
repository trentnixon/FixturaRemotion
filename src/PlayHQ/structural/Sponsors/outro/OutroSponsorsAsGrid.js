import React from 'react';
import {Img, useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import {FromTopToBottom} from '../../../Animation/ClipWipe';
import {
	calculateImageDimensions,
	getPrimarySponsor,
	groupSponsors,
	calculateImgSize,
} from '../Utils/utils';
import {useVideoDataContext} from '../../../context/VideoDataContext';
import {useLayoutContext} from '../../../context/LayoutContext';

// Container for all sponsor rows
const SponsorsContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

// Row container for general sponsors
const SponsorRow = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin-bottom: 0px;
`;

// Container for each sponsor image
const SponsorImg = styled.div`
	width: ${(props) =>
		props.width}; // Width is dynamically set based on number of sponsors
	height: ${(props) => props.height};
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 5px;
`;

const SponsorLogo = ({src, frame, FPS, delay}) => {
	return (
		<Img
			src={src}
			style={{
				clipPath: FromTopToBottom(10 + delay, 'Wobbly'),
				opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
				maxHeight: '100%',
				maxWidth: '100%',
				marginBottom: '0px',
			}}
		/>
	);
};

const OutroSponsorsAsGrid = () => {
	const {DATA} = useVideoDataContext();

	if (
		!DATA ||
		!DATA.VIDEOMETA ||
		!DATA.VIDEOMETA.Club ||
		!DATA.VIDEOMETA.Club.Sponsors
	) {
		console.error('Invalid data structure for sponsors');
		return null;
	}

	const {Sponsors} = DATA.VIDEOMETA.Club;
	const GeneralSponsors = Sponsors.default?.general_sponsors || [];
	const primarySponsor = getPrimarySponsor(Sponsors);
	const imgSize = calculateImgSize(GeneralSponsors?.length || 1);

	return (
		<SponsorsContainer>
			<PrimaryLogo primarySponsor={primarySponsor} imgSize={imgSize} />
			<GroupedSponsors GeneralSponsors={GeneralSponsors} imgSize={imgSize} />
		</SponsorsContainer>
	);
};

export default OutroSponsorsAsGrid;

const PrimaryLogo = (props) => {
	const {primarySponsor, imgSize} = props;
	const {TIMINGS} = useLayoutContext();
	const frame = useCurrentFrame();
	const {FPS_OUTRO} = TIMINGS;
	if (!primarySponsor) return null;
	return (
		<SponsorImg width="100%" height={`${imgSize * 1.5}px`}>
			<SponsorLogo
				src={primarySponsor.logo.url}
				frame={frame}
				FPS={FPS_OUTRO}
				delay={0}
			/>
		</SponsorImg>
	);
};

const GroupedSponsors = (props) => {
	const {GeneralSponsors, imgSize} = props;
	const {TIMINGS} = useLayoutContext();
	const frame = useCurrentFrame();
	const {FPS_OUTRO} = TIMINGS;

	if (GeneralSponsors.length === 0) return null;

	const groupedSponsors = groupSponsors(GeneralSponsors);

	return (
		<>
			{groupedSponsors.map((row, rowIndex) => (
				<SponsorRow key={rowIndex}>
					{row.map((s, index) => (
						<SponsorImg
							key={index}
							width={`calc(100% / ${row.length})`}
							height={`${imgSize}px`}
						>
							<SponsorLogo
								IMGStyles={calculateImageDimensions(s.logo, [
									imgSize,
									imgSize,
									imgSize,
								])}
								src={s.logo.url}
								frame={frame}
								FPS={FPS_OUTRO}
								delay={(index + 1) * 5}
							/>
						</SponsorImg>
					))}
				</SponsorRow>
			))}
		</>
	);
};
