import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {AccountName} from './AccountName';
import {AccountLogo} from './AccountLogo';
import {AssetTitle} from './AssetTitle';

import IntroPrimarySponsorOnly from '../../../../structural/Sponsors/Intro/IntroPrimarySponsorOnly';

export const TitleSequenceFrame = (props) => {
	const {FPS_INTRO} = props;
	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS_INTRO} layout="none">
						<IntroContainer>
							<AccountLogo {...props} />
							<AccountName {...props} />
							<AssetTitle {...props} />
						</IntroContainer>

						<IntroPrimarySponsorOnly {...props} />
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
	justify-content: flex-end;
	align-items: center;
	margin-bottom: 160px;
`;
