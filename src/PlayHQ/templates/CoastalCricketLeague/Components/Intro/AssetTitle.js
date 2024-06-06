import styled from 'styled-components';
import { getContrastColor } from '../../../../utils/colors';
import { SpringToFrom } from '../../../../Animation/RemotionSpring';

export const AssetTitle = (props) => {
  const { FPS_INTRO, VIDEOMETA } = props;
  const { Font, Color } = props.StyleConfig;

  return (
    <>
      <AccountTitle
        style={{
          ...Font.TitleAlt,
          width: '80%',
          transform: `translateY(${SpringToFrom(
            0,
            -1000,
            1,
            'Wobbly'
          )}px) translateY(${SpringToFrom(FPS_INTRO - 12, 0, 1000, 'Slow')}px)`,
          textShadow: `0px 0px ${SpringToFrom(
            15,
            0,
            30,
            'Slow'
          )}px #298da7`, // Animate the text-shadow
        }}
      >
        {VIDEOMETA.Club.Name}
      </AccountTitle>
      <VideoTitle
        style={{
          ...Font.Title,
          color: '#FFFFFF', // Set the text color to white
          transform: `translateY(${SpringToFrom(
            3,
            1000,
            1,
            'Wobbly'
          )}px) translateY(${SpringToFrom(FPS_INTRO - 15, 0, 1000, 'Slow')}px)`,
          textShadow: `0px 0px ${SpringToFrom(
            25,
            0,
            30,
            'Wobbly'
          )}px #298da7`, // Animate the text-shadow
        }}
      >
        {VIDEOMETA.Video.Title}
      </VideoTitle>
    </>
  );
};

const VideoTitle = styled.h1`
  width: 100%;
  font-weight: 900;
  font-size: 8em;
  margin: 0 0 0px 0;
  padding: 0;
  line-height: 1em;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  z-index: 2000;
  color: #ffffff;
  -webkit-text-stroke: 1px #298da7; /* Clean stroke around the letters */
 
`;

const AccountTitle = styled.h3`
  width: 100%;
  font-weight: 400;
  font-size: 2em;
  margin: 10px 0 20px 0;
  padding: 0;
  line-height: 1em;
  text-align: center;
  letter-spacing: -0em;
  text-transform: uppercase;
  z-index: 2000;
  color: #ffffff; // Set the text color to white
  -webkit-text-stroke: 1px #298da7; /* Clean stroke around the letters */

`;
