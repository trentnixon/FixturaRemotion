import { FromTopToBottom } from '../../../../../../Animation/ClipWipe';
import { interpolateOpacityByFrame } from '../../../../../../Animation/interpolate';
import {ScoreCopy, TeamName} from './sharedStyles';
import {useCurrentFrame} from 'remotion';
export const DisplayTeamName = (props) => {
	const {Name, ComponentFPS, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
    const frame = useCurrentFrame();
	const teamStyles = {
		color: Color.Primary.BackgroundContractColor,
		...Font.Copy,
		clipPath: FromTopToBottom(30, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			ComponentFPS.End - 15,
			ComponentFPS.End,
			1,
			0
		),
		textAlign: 'center',
	};

	return (
		<TeamName>
			<ScoreCopy style={{...teamStyles}}>{Name}</ScoreCopy>
		</TeamName>
	);
};
