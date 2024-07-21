import React from 'react';
import styled from 'styled-components';

const PlayerScore = styled.h1`
  width: 100%;
  font-style: normal;
  font-weight: 700;
  font-size: 3em;
  line-height: 1em;
  text-align: center;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  margin: 15px 0;
  padding: 0;
`;

const CNSWBattingScores = ({COLOR, player, fontFamily, style}) => {
  return (
    <PlayerScore
      style={{
        color: COLOR,
        fontFamily,
        ...style,
      }}
    >
      {player.runs}
      {player.notOut ? '*' : ' '}
      <span
        style={{
          fontSize: '.4em',
        }}
      >
        {player.balls === 0 ? '' : `(${player.balls})`}
      </span>
    </PlayerScore>
  );
};

export default CNSWBattingScores;
