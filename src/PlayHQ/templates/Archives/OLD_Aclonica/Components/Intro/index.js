import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {AccountName} from './AccountName';
import {AccountLogo} from './AccountLogo';
import {AssetTitle} from './AssetTitle';
import {PrincipalSponsor} from './PrincipalSponsor';

export const TitleSequenceFrame = (props) => {
	const {FPS_INTRO} = props;
	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS_INTRO} layout="none">
						<IntroContainer>
							<AssetTitle {...props} />
							<LogoOrgainsationContainer>
								<AccountLogo {...props} />
								<AccountName {...props} />
							</LogoOrgainsationContainer>
							
						</IntroContainer>
						<PrincipalSponsor {...props} />
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

const LogoOrgainsationContainer = styled.div`
	width: 80%;
	display: flex;
	margin-top:6em;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;
