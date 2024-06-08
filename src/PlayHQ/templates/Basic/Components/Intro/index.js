import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {AccountName} from './AccountName';

import {AssetTitle} from './AssetTitle';
import IntroPrimarySponsorOnly from '../../../../structural/Sponsors/Intro/IntroPrimarySponsorOnly';
import { IntroScaleFromZero } from '../../../../structural/AccoutLogo/ScaleFromZero/Intro_ScaleFromZero';

const IntroContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const TitleSequenceFrame = (props) => {
	const {FPS_INTRO} = props;
	
	return (
		<> 
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={FPS_INTRO} layout="none">
						<IntroContainer>
							<AccountName {...props} />
							<IntroScaleFromZero {...props} />
							<AssetTitle {...props} /> 
						</IntroContainer>
						<IntroPrimarySponsorOnly {...props} />
					</Series.Sequence> 
				</Series>
			</Sequence>
		</>
	);
}; 


