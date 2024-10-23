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
	align-items: flex-end;
	height: 60px;
	padding: 0 10px;
	margin-bottom: 0px;
`;

const HeaderCopy = styled.p`
	display: block;
	text-transform: uppercase;
	width: auto;
	width: 100%;
	margin: 0;
`;

export const HeaderContainer = (props) => {
	const {Ladder} = props;
	const {name} = Ladder;

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
					textAlign: 'center',
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
				{name}
			</HeaderCopy>
		</HeaderContainerStyles>
	);
};
