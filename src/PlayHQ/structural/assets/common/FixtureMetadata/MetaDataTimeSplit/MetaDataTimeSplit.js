import {useCurrentFrame} from 'remotion';
import {FromMiddle} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {HeaderContainerStyles} from './components/sharedStyles';
import {DisplayMetaItem} from './components/DisplayMetaItem';

export const MetaDataTimeSplit = (props) => {
	const {matchData, fontFamily, ComponentFPS, StyleConfig} = props;
	const {Color} = StyleConfig;
	const {ground, round, grade} = matchData;
	const frame = useCurrentFrame();

	const MetaDataPoints = [
		{
			label: grade.gradeName,
			width: '30%',
			textAlign: 'left',
			ComponentFPS: ComponentFPS.Display,
			
		},

		{
			label: ground,
			width: '100%',
			textAlign: 'center',
			ComponentFPS: ComponentFPS.Players,
		},
		{
			label: round,
			width: '30%',
			textAlign: 'right',
			ComponentFPS: ComponentFPS.Display,
		},
	];

	return (
		<>
			<HeaderContainerStyles
				style={{
					clipPath: FromMiddle(ComponentFPS.Display.Start, 'Wobbly'),
					opacity: interpolateOpacityByFrame(
						frame,
						ComponentFPS.Players.End - 15,
						ComponentFPS.Players.End,
						1,
						0
					),
				}}
			>
				{MetaDataPoints.map((points, i) => {
					return (
						<DisplayMetaItem
							key={i}
							StyleConfig={StyleConfig}
							label={points.label}
							width={points.width}
							fontFamily={fontFamily}
							color={Color.Primary.BackgroundContractColor}
							ComponentFPS={points.ComponentFPS}
							frame={frame}
							textAlign={points.textAlign}
						/>
					);
				})}
			</HeaderContainerStyles>
		</>
	);
};
