import {Sequence, Series} from 'remotion';

import styled from 'styled-components';
/* import {AccountName} from './AccountName';
import {AccountLogo} from './AccountLogo'; */
import {AssetTitle} from './AssetTitle';

import IntroPrimarySponsorOnly from '../../Sponsors/Intro/IntroPrimarySponsorOnly';
import {useLayoutContext} from '../../../context/LayoutContext';

const Container = styled.div`
	height: 100%;
	width: 200px;
	position: absolute;
	right: 0;
`;

const Div = styled.div`
	height: 100%;
	width: 20px;
	background-color: green;
	position: absolute;
	transition: height 1s ease-in-out;

	&:first-of-type {
		top: 0;
		left: 0;
	}

	&:last-of-type {
		bottom: 0;
		right: 0;
	}
`;

export const FixturaIntroKayo = () => {
	const {TIMINGS} = useLayoutContext();
	return (
		<Sequence style={{flexDirection: 'column'}}>
			<Series>
				<Series.Sequence durationInFrames={TIMINGS.FPS_INTRO} layout="none">
					<IntroContainer>
						<AssetTitle />
					</IntroContainer>
					<Container>
						<Div />
						<Div />
					</Container>
					<IntroPrimarySponsorOnly />
				</Series.Sequence>
			</Series>
		</Sequence>
	);
};

const IntroContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	margin-bottom: 0px;
	padding: 10px 0px;
`;
