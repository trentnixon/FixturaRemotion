import {Sequence, Series} from 'remotion';
import styled from 'styled-components';

// Components
import {AccountLogo} from './AccountLogo';
import {AccountName} from './AccountName';
import {AssetTitle} from './AssetTitle';
import {PrincipalSponsor} from './PrincipalSponsor';

export const TitleSequenceFrame = ({THEME, FPS_INTRO, VIDEOMETA}) => {
	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS_INTRO} layout="none">
						<IntroContainer>
							<IntroInnerContianer>
								<AccountLogo VIDEOMETA={VIDEOMETA} FPS_INTRO={FPS_INTRO} />

								<IntroGroupCopy>
									<AssetTitle
										VIDEOMETA={VIDEOMETA}
										THEME={THEME}
										FPS_INTRO={FPS_INTRO}
									/>
									<AccountName
										VIDEOMETA={VIDEOMETA}
										THEME={THEME}
										FPS_INTRO={FPS_INTRO}
									/> 
								</IntroGroupCopy>
							</IntroInnerContianer>
						</IntroContainer>

						<PrincipalSponsor
							VIDEOMETA={VIDEOMETA}
							THEME={THEME}
							FPS_INTRO={FPS_INTRO}
						/>
					</Series.Sequence>
				</Series>
			</Sequence>
		</>
	);
};

const IntroContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	flex-shrink: 0;
`;

const IntroInnerContianer = styled.div`
	display: flex;
	align-items: center;
	align-content: center;
	justify-content: center;
	margin: 0 2%;
	width: 96%;
`;
const IntroGroupCopy = styled.div`
	display: flex;
	flex-direction: column;
`;
