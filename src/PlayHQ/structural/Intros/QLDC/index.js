import React from 'react';
import {Sequence} from 'remotion';
import styled from 'styled-components';
import {AccountName} from './AccountName';
import {AccountLogo} from './AccountLogo';
import {AssetTitle} from './AssetTitle';
import IntroPrimarySponsorOnly from '../../Sponsors/Intro/IntroPrimarySponsorOnly';
import {useLayoutContext} from '../../../context/LayoutContext';

export const FixturaIntroQLDC = () => {
	const {TIMINGS} = useLayoutContext();
	const {FPS_INTRO} = TIMINGS;

	return (
		<Sequence durationInFrames={FPS_INTRO} layout="none">
			<IntroContainer>
				<AccountLogo />
				<AccountName />
				<AssetTitle />
			</IntroContainer>
			<IntroPrimarySponsorOnly />
		</Sequence>
	);
};

const IntroContainer = styled.div`
	width: 42%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
