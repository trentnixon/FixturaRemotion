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
	padding: 0 12px;
	margin: 5px 0;
`;
const MetaItem = styled.div`
	width: 100%;
	text-align: right;
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
			style={{
				...generateTeamStyle(FPS_SCORECARD),
				clipPath: FromTopToBottom(35, 'Slow'),
			}}
		>
			<MetaItem
				style={{
					...generateTeamStyle(FPS_SCORECARD),
					...Font.Copy,
					...TextStyles.copyMedium,
				}}
				color="white"
				fontFamily={Font.Copy.fontFamily}
			>
				{VALUE}
			</MetaItem>
		</Wrapper>
	);
};
