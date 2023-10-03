import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {AccountName} from './AccountName';
import {AccountLogo} from './AccountLogo';
import {AssetTitle} from './AssetTitle';
import {PrincipalSponsor} from './PrincipalSponsor';

export const TitleSequenceFrame = ({theme, FPS, fontFamily, DATA}) => {
	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS} layout="none">
						<IntroContainer>
							<AccountName 
								fontFamily={fontFamily}
								DATA={DATA}
								theme={theme}
								FPS={FPS}
							/> 
							<AccountLogo fontFamily={fontFamily} DATA={DATA} FPS={FPS} />
							<AssetTitle
								fontFamily={fontFamily}
								DATA={DATA}
								theme={theme}
								FPS={FPS}
							/>
						</IntroContainer>

						<PrincipalSponsor
							fontFamily={fontFamily}
							DATA={DATA}
							theme={theme}
							FPS={FPS}
						/>
					</Series.Sequence>
				</Series>
			</Sequence>
		</>
	);
};

const IntroContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
