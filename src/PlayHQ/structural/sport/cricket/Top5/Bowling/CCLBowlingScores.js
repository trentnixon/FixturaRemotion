import { FromLeftToRight } from "../../../../../Animation/ClipWipe";
import { PerformanceBowling } from "../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_CommonVariables";

export const CCLBowlingScores = ({COLOR, player, int, StyleConfig}) => {
	const BowlingPerformanceStyles = {
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
		<PerformanceBowling
			customSpanStyles={BallStyles}
			customStyles={BowlingPerformanceStyles}
			Performance={{
				Name: player.key,
				Wickets: player.wickets,
				Runs: player.runs,
				Overs: player.overs,
			}}
		/>
	);
};