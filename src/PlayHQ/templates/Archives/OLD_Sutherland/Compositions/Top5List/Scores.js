import styled from 'styled-components';

const PlayerScore = styled.h1`
	font-size: 5.5em;
	margin: -0.6em 0 0px 0;
	line-height: 1em;
	letter-spacing: -3px;
`;

export const BowlingScores = ({COLOR, player}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				fontFamily: 'Oswald',
			}}
		>
			{player.key}
			{'/'}
			{player.param2}
			<span
				style={{
					fontSize: '.4em',
                    fontWeight:200
				}}
			>
				{player.param1 === 0 ? '' : `(${player.param1})`}
			</span>
		</PlayerScore>
	);
};

export const BattingScores = ({COLOR, player}) => {
	return (
		<PlayerScore
			style={{
				color: COLOR,
				fontFamily: 'Oswald',
			}}
		>
			{player.key}{' '}
			<span
				style={{
					fontSize: '.4em',
                    fontWeight:200
				}}
			>
				{player.param1 === 0 ? '' : `(${player.param1})`}
			</span>
		</PlayerScore>
	);
};
