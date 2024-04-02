import {useCurrentFrame} from 'remotion';
import styled from 'styled-components';
import {
	FromLeftToRight,
	FromTopToBottom,
} from '../../../../../../Animation/ClipWipe';
import {interpolateOpacityByFrame} from '../../../../../../Animation/interpolate';
import {ResultsTextDefault} from '../../../../../../common/components/copy/commonAssetTypes';

const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	font-size: 1.7em;
	height: 2.2em;
	line-height: 1.7em;
	font-weight: 600;
	padding: 10px 0;
	position: relative;
	margin-bottom: 5px;
`;

const TeamandScores = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${(props) => props.BG};
	padding: 0px;
`;

export const TeamDetail = (props) => {
	const {FPS_SCORECARD, Name, StyleConfig} = props;
	const {Font, Color} = StyleConfig;
	const frame = useCurrentFrame();

	const teamNameCustomStyles = {
		color: Color.Secondary.Contrast,
		padding: '5px 0px 6px 7px',
		fontWeight: 600,
		...Font.TitleAlt,
		clipPath: FromTopToBottom(35, 'Slow'),
		opacity: interpolateOpacityByFrame(
			frame,
			props.FPS_SCORECARD - 30,
			props.FPS_SCORECARD,
			1,
			0
		),
		fontSize:'1.2em'
	};

	return (
		<TeamScoreContainer BG={Color.Secondary.Main}>
			<TeamandScores
				BG={Color.Secondary.Main}
				style={{
					clipPath: FromLeftToRight(5, 'Slow'),
					opacity: interpolateOpacityByFrame(
						frame,
						FPS_SCORECARD - 30,
						FPS_SCORECARD,
						1,
						0
					),
				}}
			>
				<ResultsTextDefault customStyles={teamNameCustomStyles}>
					{Name}
				</ResultsTextDefault>
			</TeamandScores>
		</TeamScoreContainer>
	);
};
