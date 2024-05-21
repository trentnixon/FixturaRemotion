import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';

import OutroSponsorsAsGrid from '../../../../structural/Sponsors/outro/OutroSponsorsAsGrid';
import {OutroScaleFromZero} from '../../../../structural/AccoutLogo/ScaleFromZero/outro_ScaleFromZero';
import {MadePossibleBy} from '../../../../structural/Sponsors/outro/MadePossibleBy';

export const OutroSequenceFrame = (props) => {
	const {DATA, FPS, StyleConfig} = props;
	const frame = useCurrentFrame();

	console.log(DATA.VIDEOMETA.Club.Logo);
	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={FPS} layout="none">
					<SponsorOuterContainer>
						<MadePossibleBy frame={frame} FPS={FPS} StyleConfig={StyleConfig} />

						<OutroSponsorsAsGrid DATA={DATA} FPS={FPS} />
						<OutroScaleFromZero
							src={DATA.VIDEOMETA.Club.Logo}
							frame={frame}
							FPS={FPS}
						/>
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
