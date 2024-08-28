import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {useStylesContext} from '../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../context/LayoutContext';

const MetaItem = styled.div`
	width: 100%;
	height: 42px;
	text-align: right;
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
`;

const generateTeamStyle = (FPS_SCORECARD) => {
	const frame = useCurrentFrame();
	return {
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
};

export const DisplayMetaItem = ({VALUE}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {FPS_SCORECARD} = TIMINGS;
	const {Font, Color} = StyleConfig;
	return (
		<MetaItem
			style={{
				...generateTeamStyle(FPS_SCORECARD),
				...Font.Copy,
				...TextStyles.copyMedium,
			}}
			color={Color.Background.Contrast}
			fontFamily={Font.Copy.fontFamily}
		>
			{VALUE}
		</MetaItem>
	);
};
