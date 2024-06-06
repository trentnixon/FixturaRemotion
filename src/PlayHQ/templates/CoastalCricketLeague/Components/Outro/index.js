import {Sequence} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import OutroSponsorsAsGrid from '../../../../structural/Sponsors/outro/OutroSponsorsAsGrid';
import {OutroScaleFromZero} from '../../../../structural/AccoutLogo/ScaleFromZero/outro_ScaleFromZero';
import {MadePossibleBy} from '../../../../structural/Sponsors/outro/MadePossibleBy';

export const OutroSequenceFrame = (props) => {
	const {DATA, FPS} = props;
	const frame = useCurrentFrame();
	return (
		<Sequence durationInFrames={FPS} layout="none">
			<SponsorOuterContainer>
				<MadePossibleBy frame={frame} FPS={FPS} {...props} />
				<OutroSponsorsAsGrid DATA={DATA} FPS={FPS} />
				<OutroScaleFromZero
					src={DATA.VIDEOMETA.Club.Logo}
					frame={frame}
					FPS={FPS}
				/>
			</SponsorOuterContainer>
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
