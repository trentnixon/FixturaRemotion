import {Sequence} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {SponsorRows} from './SponsorRows';
import {MadePossibleBy} from './MadePossibleBy';
import {ClubLogo} from './ClubLogo';

export const OutroSequenceFrame = (props) => {
	const { DATA, FPS} = props;
	const frame = useCurrentFrame();
	return (
		<Sequence durationInFrames={FPS} layout="none">
			<SponsorOuterContainer>
				<MadePossibleBy frame={frame} FPS={FPS} {...props} />
				<SponsorRows DATA={DATA}  FPS={FPS} />
				<ClubNameContainer>
					<ClubLogo src={DATA.VIDEOMETA.Club.Logo.url} frame={frame} FPS={FPS} />
				</ClubNameContainer>
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

const ClubNameContainer = styled.div`
	width: 100%;
	z-index: 2000;
	margin: 30px 0;
`;
