import React from 'react';
import styled from 'styled-components';
import { useStylesContext } from '../../../../../context/StyleContext';
import { useLayoutContext } from '../../../../../context/LayoutContext';
import { SpringToFrom } from '../../../../../Animation/RemotionSpring';
import QLDCBattingScores from '../Batting/QLDCBattingScores';
import QLDCBowlingScores from '../Bowling/QLDCBowlingScores';
import { DisplayPlayerName } from '../../../../../templates/QLDC/Components/Common/DEPRECATED_CommonVariables';
import { removeEmojis, restrictName, restrictString } from '../../../../../utils/copy';
import { FromLeftToRight } from '../../../../../Animation/ClipWipe';


const PlayerROW = styled.div`
  height: 120px;
  position: relative;
  margin: 10px 0 25px;
  padding: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const PlayerScoreContainer = styled.div`
  box-sizing: border-box;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 6px 0 0;
`;

const PlayerMetaContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

const QLDCPlayerRow = ({ player, i, TYPE }) => {
  const { StyleConfig, BuildProps } = useStylesContext();
  const { TIMINGS } = useLayoutContext();
  const { TemplateVariation } = BuildProps;
  const { FPS_MAIN } = TIMINGS;
  const { Color, Font } = StyleConfig;

  return (
    <PlayerROW>
      <PlayerScoreContainer
        style={{
          width: `${SpringToFrom(7 + Number(i), 0, 300, 'Wobbly')}px`,
          transform: `translateX(${SpringToFrom(FPS_MAIN - 10 + i, 0, -1440, 'Wobbly')}px)`,
          borderRadius: TemplateVariation.borderRadius,
          background: Color.Primary.Darken,
          borderColor: i === 0 ? Color.Secondary.Main : Color.Primary.Main,
        }}
      >
        {TYPE === 'BATTING' ? (
          <QLDCBattingScores
            player={player}
            int={i}
            COLOR={Color.Primary.Contrast}
          />
        ) : (
          <QLDCBowlingScores
            player={player}
            int={i}
            COLOR={Color.Primary.Contrast}
          />
        )}
      </PlayerScoreContainer>

      <PlayerMetaContainer
        style={{
          borderRadius: TemplateVariation.borderRadius,
          backgroundColor: Color.Primary.Lighten,
          width: `${SpringToFrom(Number(i), 0, 100, 'Wobbly')}%`,
          transform: `translateX(${SpringToFrom(FPS_MAIN - 10 + i, 0, 1440, 'Wobbly')}px)`,
        }}
      >
        <DisplayPlayerName
          NAME={restrictName(player.name, 30)}
          customStyles={{
            margin: '0 0 0 10px',
            borderRadius: TemplateVariation.borderRadius,
            color: Color.Primary.Contrast,
            ...Font.Copy,
            clipPath: FromLeftToRight(25 + i * 7, 'Slow'),
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '2.5em',
            lineHeight: '1.3em',
            textTransform: 'uppercase',
            letterSpacing: '-1px',
          }}
        />

        <DisplayPlayerName
          NAME={restrictString(removeEmojis(player.playedFor), 40)}
          restrictBy={40}
          customStyles={{
            margin: '0 0 0 10px',
            borderRadius: TemplateVariation.borderRadius,
            color: Color.Primary.Contrast,
            ...Font.Copy,
            clipPath: FromLeftToRight(25 + i * 7, 'Slow'),
            fontStyle: 'normal',
            fontWeight: 100,
            fontSize: '1.8em',
            width: '555px',
            lineHeight: '1.2em',
            textTransform: 'uppercase',
            letterSpacing: '0px',
          }}
        />
      </PlayerMetaContainer>
    </PlayerROW>
  );
};

export default QLDCPlayerRow;
