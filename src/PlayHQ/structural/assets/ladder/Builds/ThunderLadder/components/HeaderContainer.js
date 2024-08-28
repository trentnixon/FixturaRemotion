import styled from 'styled-components';
import {useCurrentFrame} from 'remotion';
import {
	FromMiddle,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {restrictString} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {useLayoutContext} from '../../../../../../context/LayoutContext';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 10px;
	margin-bottom: 0px;
	border-bottom: 3px solid ${(props) => props.Color.Secondary.Lighten};
	background-color: ${(props) => props.Color.Secondary.Main};
`;

const HeaderCopy = styled.p`
	font-style: normal;
	display: block;

	text-transform: uppercase;
	width: auto;

	width: 100%;
	margin: 0;
`;

export const HeaderContainer = (props) => {
	const {Ladder} = props;
	const {name, competition} = Ladder;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TIMINGS} = useLayoutContext();
	const {TemplateVariation} = BuildProps;
	const {FPS_LADDER} = TIMINGS;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();
	return (
		<HeaderContainerStyles
			Color={Color}
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				borderRadius: TemplateVariation.borderRadius,
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_LADDER - 30,
					FPS_LADDER,
					1,
					0
				),
			}}
		>
			<HeaderCopy
				style={{
					...Font.Copy,
					...TextStyles.copyMedium,
					color: Color.Primary.Contrast,
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_LADDER - 30,
						FPS_LADDER,
						1,
						0
					),
				}}
			>
				{restrictString(name, 25)}
			</HeaderCopy>
			<HeaderCopy
				style={{
					...Font.Copy,
					...TextStyles.copyMedium,
					textAlign: 'right',
					color: Color.Primary.Contrast,
					clipPath: FromTopToBottom(30, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_LADDER - 30,
						FPS_LADDER,
						1,
						0
					),
				}}
			>
				{restrictString(competition, 25)}
			</HeaderCopy>
		</HeaderContainerStyles>
	);
};
