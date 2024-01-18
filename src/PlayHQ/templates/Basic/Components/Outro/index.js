import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {SponsorRows} from './SponsorRows';
import {MadePossibleBy} from './MadePossibleBy';
import {ClubLogo} from './ClubLogo';

export const OutroSequenceFrame = (props) => {
	const {theme, DATA, FPS, StyleConfig} = props;
	const frame = useCurrentFrame();
	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={FPS} layout="none">
					<SponsorOuterContainer>
						<MadePossibleBy
							frame={frame}
							FPS={FPS}
							theme={theme}
							StyleConfig={StyleConfig}
						/>
						<SponsorRows DATA={DATA} theme={theme} FPS={FPS} />
						<ClubNameContainer>
							<ClubLogo
								src={DATA.VIDEOMETA.Club.Logo}
								frame={frame}
								FPS={FPS}
							/>
						</ClubNameContainer>
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

const ClubNameContainer = styled.div`
	width: 100%;
	z-index: 2000;
	margin: 30px 0;
`;
