import {Sequence, Series} from 'remotion';

import styled from 'styled-components';
/* import {AccountName} from './AccountName';
import {AccountLogo} from './AccountLogo'; */
import {AssetTitle} from './AssetTitle';

import IntroPrimarySponsorOnly from '../../Sponsors/Intro/IntroPrimarySponsorOnly';
import {useLayoutContext} from '../../../context/LayoutContext';

export const FixturaIntroMutedLeague = () => {
	const {TIMINGS} = useLayoutContext();
	return (
		<>
			<Sequence>
				<Series>
					<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO} layout="none">
						<IntroContainer>
							<AssetTitle />
						</IntroContainer>
						{/* <IntroPrimarySponsorOnly /> */}
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
	justify-content: flex-start;
	align-items: flex-start;
	margin-bottom: 0px;
	padding: 70px 55px;
`;
