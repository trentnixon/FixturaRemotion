import {useCurrentFrame} from 'remotion';
import {FromMiddle} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import {restrictString} from '../../../../../utils/copy';
import {FixtureMetaDataPoint} from './components/FixtureMetaDataPoint';
import {HeaderContainerStyles} from './components/sharedStyles';

export const TimeLocationRound = (props) => {
	const {matchData, FPS_SCORECARD, TemplateVariation} = props;
	const {ground, round, teamHome, teamAway, grade} = matchData;
	console.log(matchData.grade.gradeName);
	const frame = useCurrentFrame();
	if (teamHome === 'Bye' || teamAway === 'Bye') return false;

	const MetaDataPoints = [
		{
			type: round,
			width: '15%',
		},
		{
			type: restrictString(ground, 30),
			width: '50%',
		},
		{
			type: restrictString(grade.gradeName, 18),
			width: '35%',
		},
	];

	return (
		<HeaderContainerStyles
			borderRadius={TemplateVariation.borderRadius}
			style={{
				clipPath: FromMiddle(7, 'Wobbly'),
				opacity: interpolateOpacityByFrame(
					frame,
					FPS_SCORECARD - 30,
					FPS_SCORECARD,
					1,
					0
				),
			}} 
		>
			{MetaDataPoints.map((point, i) => {
				return (
					<FixtureMetaDataPoint
						key={i}
						Value={point.type}
						{...props}
						width={point.width}
					/>
				);
			})}
		</HeaderContainerStyles>
	);
};
