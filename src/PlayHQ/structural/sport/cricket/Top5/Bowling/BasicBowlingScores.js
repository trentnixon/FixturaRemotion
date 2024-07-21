import React from 'react';
import styled from 'styled-components';

const PlayerScore = styled.h1`
  width: 100%;
  height: 175px;
  font-style: normal;
  font-size: 5em;
  line-height: 1em;
  text-align: center;
  letter-spacing: -5px;
  text-transform: uppercase;
  margin: revert;
`;

const BasicBowlingScores = ({COLOR, player, Font}) => {
  return (
    <PlayerScore
      style={{
        color: COLOR,
        ...Font,
        fontWeight: 600,
      }}
    >
      {player.wickets}/{player.runs}
      <span
        style={{
          fontSize: '.6em',
          fontWeight: 400,
        }}
      >
        {player.param1 === 0 ? '' : `(${player.overs})`}
      </span>
    </PlayerScore>
  );
};

export default BasicBowlingScores;
