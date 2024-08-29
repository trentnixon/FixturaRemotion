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
	margin-bottom: 15px;
	border-bottom: 3px solid ${(props) => props.Color.Primary.Lighten};
	background-color: rgba(17, 17, 17, 0.7);
`;

const HeaderCopy = styled.p`
	display: block;
	text-transform: uppercase;
	width: auto;
	width: 100%;
	padding: 0 5px;
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
				borderRadius: '100px',
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
					...TextStyles.copyXSmall,
					color: 'white',
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
				{restrictString(name, 30)}
			</HeaderCopy>
			<HeaderCopy
				style={{
					...Font.Copy,
					...TextStyles.copyXSmall,
					textAlign: 'right',
					color: 'white',
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
