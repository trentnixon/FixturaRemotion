// Import necessary dependencies from remotion and local files
import { useCurrentFrame } from 'remotion';
import { FromLeftToRight, FromTopToBottom } from '../../../../Animation/ClipWipe';
import { GetBackgroundContractColorForText } from '../../../../utils/colors';
import { interpolateOpacityByFrame } from '../../../../Animation/interpolate';
import { getDynamicFontSize } from '../../utils/Copy';
import { VideoHeader } from '../../../../common/components/copy/titles';

// Define a functional component to display asset titles
export const AssetTitle = (props) => {
  // Destructuring props is not used to maintain flexibility and prop forwarding
  return (
    <>
      <VideoTitle {...props} />
      <AccountTitle {...props} />
    </>
  );
};

// Define a functional component to display video titles with animations
const VideoTitle = ({ FPS_INTRO, VIDEOMETA, StyleConfig }) => {
  const frame = useCurrentFrame(); // Get the current frame for animations

  // Style configuration for the video title
  const styleObj = {
    ...StyleConfig.Font.Title,
    fontSize: getDynamicFontSize(VIDEOMETA.grouping_category),
    color: GetBackgroundContractColorForText(
      StyleConfig.Color.Primary.Main,
      StyleConfig.Color.Secondary.Main
    ),
    width: '100%',
    margin: 0,
    padding: 0,
    lineHeight: '0.8em',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    zIndex: 2000,
  };

  // Animation configuration for the video title
  const animationObj = {
    opacity: interpolateOpacityByFrame(
      frame,
      FPS_INTRO - 30,
      FPS_INTRO - 15,
      1,
      0
    ),
    clipPath: FromTopToBottom(7, 'Wobbly'),
  };

  return (
    <VideoHeader
      value={VIDEOMETA.Video.Title}
      animationObj={animationObj}
      styleObj={styleObj}
    />
  );
};

// Define a functional component to display account titles with animations
const AccountTitle = ({ FPS_INTRO, THEME, VIDEOMETA, StyleConfig }) => {
  const frame = useCurrentFrame(); // Get the current frame for animations

  // Style configuration for the account title
  const styleObj = {
    ...StyleConfig.Font.TitleAlt,
    fontSize: '2em',
    color: GetBackgroundContractColorForText(THEME.primary, THEME.secondary),
    width: '100%',
    marginTop: '10px',
    marginBottom: '0',
    padding: '0',
    lineHeight: '1em',
    textAlign: 'center',
    letterSpacing: '-0.02em',
    textTransform: 'uppercase',
    zIndex: 2000,
  };

  // Animation configuration for the account title
  const animationObj = {
    opacity: interpolateOpacityByFrame(
      frame,
      FPS_INTRO - 30,
      FPS_INTRO - 15,
      1,
      0
    ),
    clipPath: FromLeftToRight(7, 'Wobbly'),
  };

  return (
    <VideoHeader
      value={VIDEOMETA.Club.Name}
      animationObj={animationObj}
      styleObj={styleObj}
    />
  );
};

/*
Dev notes:
- Refactored to improve readability and modularity by separating components.
- Incorporated dynamic styling and animations based on props for flexibility.

Recommendations for future improvements:
- Consider extracting style and animation configurations into separate utility functions or using context for theme management to further clean up component code.
- Evaluate the performance impact of using dynamic animations and styles, especially with large numbers of components rendering simultaneously.

This file defines components for displaying titles in a video project, including animations for their appearance. It utilizes the Remotion library to integrate animations based on the video's current frame. Components rely on external utilities for dynamic styling and color contrast adjustments. These components are part of the video rendering process, specifically handling title animations and styles, and are located in the project's component structure related to video content rendering.
*/
