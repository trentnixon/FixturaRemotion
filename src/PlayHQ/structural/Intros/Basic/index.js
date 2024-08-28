import {Sequence, Series} from 'remotion';
import styled from 'styled-components';
import {useLayoutContext} from '../../../context/LayoutContext';

import {AccountName} from './AccountName';
import {AssetTitle} from './AssetTitle';
import IntroPrimarySponsorOnly from '../../Sponsors/Intro/IntroPrimarySponsorOnly';
import {IntroScaleFromZero} from '../../AccoutLogo/ScaleFromZero/Intro_ScaleFromZero';


const IntroContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const FixturaIntroBasic = () => {
	const {TIMINGS} = useLayoutContext();
	return (
		<Sequence>
			<Series>
				<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO} layout="none">
					<IntroContainer>
						<AccountName />
						<IntroScaleFromZero />
						<AssetTitle />
					</IntroContainer>
					<IntroPrimarySponsorOnly />
				</Series.Sequence>
			</Series>
		</Sequence>
	);
};
