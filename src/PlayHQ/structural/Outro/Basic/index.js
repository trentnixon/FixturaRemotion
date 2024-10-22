import {Sequence, Series} from 'remotion';
import styled from 'styled-components';

import {useLayoutContext} from '../../../context/LayoutContext';

import OutroSponsorsAsGrid from '../../Sponsors/outro/OutroSponsorsAsGrid';
import {OutroScaleFromZero} from '../../AccoutLogo/ScaleFromZero/outro_ScaleFromZero';
import {MadePossibleBy} from '../../Sponsors/outro/MadePossibleBy';

export const FixturaOutroBasic = () => {
	const {TIMINGS} = useLayoutContext();

	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={TIMINGS.FPS_OUTRO} layout="none">
					<SponsorOuterContainer>
						<MadePossibleBy />
						<OutroSponsorsAsGrid />
						<OutroScaleFromZero />
					</SponsorOuterContainer>
				</Series.Sequence>
			</Series>
		</Sequence>
	);
};

// Sponsors
const SponsorOuterContainer = styled.div`
	z-index: 2000;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

const MutedSponsorOuterContainer = styled.div`
	z-index: 2000;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: 730px;
`;

export const FixturaOutroMuted = () => {
	const {TIMINGS} = useLayoutContext();

	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={TIMINGS.FPS_OUTRO} layout="none">
					<MutedSponsorOuterContainer>
						<MadePossibleBy />
						<OutroSponsorsAsGrid />
						<OutroScaleFromZero />
					</MutedSponsorOuterContainer>
				</Series.Sequence>
			</Series>
		</Sequence>
	);
};
