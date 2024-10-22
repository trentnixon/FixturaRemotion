import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const Wrapper = styled.div`
	width: 100%;
	margin: 15px 0 0 0;
	display: flex;
	background-image: url(${(props) => props.BGImg});
	background-size: cover;
`;
const MetaItem = styled.div`
	width: 100%;

	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
`;

const generateTeamStyle = (FPS_SCORECARD) => {
	const frame = useCurrentFrame();
	return {
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};

export const DisplayMetaItem = ({VALUE, BGIMG = false}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font} = StyleConfig;
	return (
		<Wrapper
			BGImg={BGIMG}
			style={{
				...generateTeamStyle(FPS_SCORECARD),
				clipPath: FromTopToBottom(35, 'Slow'),
			}}
		>
			<MetaItem
				style={{
					...generateTeamStyle(FPS_SCORECARD),
					...Font.Copy,
					...TextStyles.copySmall,
					textAlign: 'center',
				}}
				color="black"
				fontFamily={Font.Copy.fontFamily}
			>
				{VALUE}
			</MetaItem>
		</Wrapper>
	);
};
