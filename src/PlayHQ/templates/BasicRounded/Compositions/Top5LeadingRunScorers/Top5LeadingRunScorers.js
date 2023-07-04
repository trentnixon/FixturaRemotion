import { AbsoluteFill, useVideoConfig, useCurrentFrame } from "remotion";

import TitleSequence from './TitleSequence'

export const Top5LeadingRunsScorers = () => {
  const { fps } = useVideoConfig();

  return (
    <AbsoluteFill>
      <TitleSequenceContaner fps={fps} durationInFrames={90} />
      <MainSequence fps={fps} durationInFrames={1000} label="Main Sequence" />
      <EndTitlesSequence fps={fps} durationInFrames={90} />
    </AbsoluteFill>
  );
};

const TitleSequenceContaner = ({
  fps,
  durationInFrames,
}) => {
  const frame = useCurrentFrame();

  if (frame > durationInFrames) {
    return null;
  }

  return (
    <div>
      <TitleSequence durationInFrames={30} />
    </div>
  );
};

const MainSequence = ({ fps, durationInFrames, label }) => {
  const frame = useCurrentFrame();

  if (frame > durationInFrames) {
    return null;
  }

  return (
    <div>
      {/* Add your main sequence content here */}
      <div>{label}</div>
    </div>
  );
};

const EndTitlesSequence = ({ fps, durationInFrames }) => {
  const frame = useCurrentFrame();

  if (frame > durationInFrames) {
    return null;
  }

  return (
    <div>
      {/* Add your end titles sequence content here */}
    </div>
  );
};

