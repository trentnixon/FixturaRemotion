// /components/DisplayGradeName.js
import {useCurrentFrame} from 'remotion';
import {TeamScoreContainer} from './SharedStyles';
import {FromTopToBottom} from '../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../Animation/interpolate';
import { FixtureLabels } from '../../../../../common/components/copy/commonAssetTypes';

const DisplayGradeName = (props) => {
	const {FPS_SCORECARD, Value} = props;
	const {Font, Color} = props.StyleConfig;
	const frame = useCurrentFrame();

	const AnimationStyles = {
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			FPS_SCORECARD - 30,
			FPS_SCORECARD,
			1,
			0
		),
	};
	const DisplayGradeStyles = {
		...Font.Copy,
		color: Color.Primary.BackgroundContractColor,
		fontSize: '2em',
		lineHeight: '1.2em',
		fontWeight: 400,
		textAlign: 'center',
		margin: 0,
		padding: 0,
		width: '100%',
		letterSpacing: '0.05em',
		textTransform: 'uppercase',
	};
	return (
		<TeamScoreContainer>
			<FixtureLabels customStyles={{...DisplayGradeStyles, ...AnimationStyles}}>
				{Value}
			</FixtureLabels>
		</TeamScoreContainer>
	);
};

export default DisplayGradeName;
