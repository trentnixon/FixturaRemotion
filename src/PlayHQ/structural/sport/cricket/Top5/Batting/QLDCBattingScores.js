import React from 'react';
import { FromLeftToRight } from '../../../../../Animation/ClipWipe';
import { useStylesContext } from '../../../../../context/StyleContext';
import { P } from '../../../../../common/type/primitives';

const QLDCBattingScores = ({ COLOR, player, int }) => {
  const { StyleConfig } = useStylesContext();
  const { Font } = StyleConfig;

  const BattingPerformanceStyles = {
    ...Font.Copy,
    color: COLOR,
    fontWeight: '600',
    fontSize: '4.5em',
    lineHeight: '1em',
    letterSpacing: '-0.05em',
    textTransform: 'uppercase',
    margin: '15px 0',
    clipPath: FromLeftToRight(15 + int * 7, 'Slow'),
  };

  const BallStyles = {
    fontSize: '0.5em',
    ...Font.Copy,
  };

  const { player: Name, runs: Runs, notOut: isNotOut, balls: Balls } = player;
  const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

  if (restrictedValues.includes(Name) || restrictedValues.includes(Runs)) {
    return null;
  }

  const combinedSpanStyles = { fontSize: '0.8em', fontWeight: '400', ...BallStyles };

  return (
    <P {...BattingPerformanceStyles}>
      {Runs}
      {isNotOut ? '*' : ''}
      <span style={combinedSpanStyles}>
        {Balls !== '0' && Balls !== 'undefined' ? ` (${Balls})` : ''}
      </span>
    </P>
  );
};

export default QLDCBattingScores;
