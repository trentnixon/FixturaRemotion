// /components/DisplayTeamName.js
import {useCurrentFrame} from 'remotion';
import { TeamScoreContainer } from './SharedStyles';
import { FromLeftToRight } from '../../../../../Animation/ClipWipe';
import { interpolateOpacityByFrame } from '../../../../../Animation/interpolate';
import { FixtureLabels } from '../../../../../common/components/copy/commonAssetTypes';

const DisplayTeamName = ({ FPS_SCORECARD, Value, TemplateVariation, bgColor, StyleConfig,FontColor }) => {
  const { Font, Color } = StyleConfig;
  const frame = useCurrentFrame();

  const AnimationStyles = {
    clipPath: FromLeftToRight(7, 'Wobbly'),
    opacity: interpolateOpacityByFrame(frame, FPS_SCORECARD - 30, FPS_SCORECARD, 1, 0),
  };

  const DisplayTeamNameStyles = {
    ...Font.Copy,
    color: FontColor,
    fontWeight: 400,
    fontSize: '2em',
    lineHeight: '1em',
    width: '60%',
    margin: '0 20%',
    letterSpacing: '-0.03em',
    textTransform: 'uppercase',
    textAlign: 'center',
  };

  return (
    <TeamScoreContainer
      style={{ ...AnimationStyles }}
      borderRadius={TemplateVariation.borderRadius}
      bgColor={bgColor}
    >
      <FixtureLabels customStyles={{ ...DisplayTeamNameStyles, ...AnimationStyles }}>
        {Value}
      </FixtureLabels>
    </TeamScoreContainer>
  );
};

export default DisplayTeamName;
