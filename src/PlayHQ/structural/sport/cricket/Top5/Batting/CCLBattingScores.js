import { FromLeftToRight } from "../../../../../Animation/ClipWipe";
import { PerformanceBatting } from "../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables";

export const CCLBattingScores = ({COLOR, player, int, StyleConfig}) => {

	const BattingPerformanceStyles = {
		...StyleConfig.Font.TitleAlt,
		color: COLOR,
		fontWeight: '400',
		fontSize: '3.5em',
		lineHeight: '1em',
		letterSpacing: '-0.05em',
		textTransform: 'uppercase',
		margin: '15px 0',
		clipPath: FromLeftToRight(15 + int * 7, 'Slow'),
	};
	const BallStyles = {
		fontSize: '0.6em',
		fontWeight: '400',
		...StyleConfig.Font.Copy,
	};
	return (
		<>
			<PerformanceBatting
				customStyles={BattingPerformanceStyles}
				customSpanStyles={BallStyles}
				Performance={{
					Name: player.player,
					isNotOut: player.notOut,
					Runs: player.runs,
					Balls: player.balls,
				}}
			/>
		</>
	);
};