import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {MadePossibleBy} from '../../../../structural/Sponsors/outro/MadePossibleBy';
import {OutroScaleFromZero} from '../../../../structural/AccoutLogo/ScaleFromZero/outro_ScaleFromZero';
import OutroSponsorsAsGrid from '../../../../structural/Sponsors/outro/OutroSponsorsAsGrid';

const SponsorOuterContainer = styled.div`
	z-index: 2000;
	display: flex;
	flex-direction: column;
	width: 100%;
	justify-content: space-between;
	align-items: center;
`;

export const OutroSequenceFrame = (props) => {
	const {DATA, FPS} = props;
	const frame = useCurrentFrame();
	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={FPS} layout="none">
					<SponsorOuterContainer>
						<MadePossibleBy frame={frame} FPS={FPS} {...props} />

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