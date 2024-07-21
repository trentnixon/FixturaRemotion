import React from 'react';
import { FromLeftToRight } from '../../../../../Animation/ClipWipe';
import { useStylesContext } from '../../../../../context/StyleContext';
import { P } from '../../../../../common/type/primitives';

const QLDCBowlingScores = ({ COLOR, player, int }) => {
  const { StyleConfig } = useStylesContext();
  const { Font } = StyleConfig;

  const BowlingPerformanceStyles = {
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
  };

  const { key: Name, wickets: Wickets, runs: Runs, overs: Overs } = player;
  const restrictedValues = ['Total', 'Extras', 'Private Player', '', 0];

  if (restrictedValues.includes(Name)) {
    return null;
  }

  const combinedSpanStyles = { fontSize: '0.8em', fontWeight: '400', ...BallStyles };

  return (
    <P {...BowlingPerformanceStyles}>
      {`${Wickets}/${Runs}`}
      <span style={combinedSpanStyles}>{`(${Overs})`}</span>
    </P>
  );
};

export default QLDCBowlingScores;
