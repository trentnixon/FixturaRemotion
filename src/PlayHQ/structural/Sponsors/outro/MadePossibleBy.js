import styled from 'styled-components';
import {FromTopToBottom} from '../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../Animation/interpolate';
import {useCurrentFrame} from 'remotion';
import {useStylesContext} from '../../../context/StyleContext';
import {useLayoutContext} from '../../../context/LayoutContext';
import {P} from '../../../common/type/primitives';

export const MadePossibleBy = ({COPY = 'Made possible by our Sponsors'}) => {
	const frame = useCurrentFrame();
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();

	const {Font, Color} = StyleConfig;
	const {FPS_OUTRO} = TIMINGS;
	const StyleOBJ = {
		...Font.Copy,
		...TextStyles.copySmall,
		clipPath: FromTopToBottom(15, 'Wobbly'),
		color: Color.Primary.BackgroundContractColor,
		opacity: interpolateOpacityByFrame(frame, FPS_OUTRO - 15, FPS_OUTRO, 1, 0),
		textAlign: 'center',
		textTransform: 'uppercase',
		margin: '30px 0',
	};
	return (
		<SponsorIntroContainer>
			<P {...StyleOBJ}>{COPY}</P>``
		</SponsorIntroContainer>
	);
};

const SponsorIntroContainer = styled.div`
	width: 100%;
	left: 0px;
	top: 20px;
`;
