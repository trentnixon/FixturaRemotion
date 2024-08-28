import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const Wrapper = styled.div`
	width: 100%;
	height: 42px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-image: url(${(props) => props.BGImg});
	background-size: cover;
`;
const MetaItem = styled.div`
	width: 100%;
	text-align: center;
	font-size: 1.5em;
	font-weight: 600;
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
	const {StyleConfig} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;
	console.log('Color', Color);
	return (
		<Wrapper
			BGImg={BGIMG}
			style={{
				...generateTeamStyle(FPS_SCORECARD),
				clipPath: FromTopToBottom(35, 'Slow'),
			}}
		>
			<MetaItem
				style={{...generateTeamStyle(FPS_SCORECARD), ...Font.Copy}}
				color="white"
				fontFamily={Font.Copy.fontFamily}
			>
				{VALUE}
			</MetaItem>
		</Wrapper>
	);
};
