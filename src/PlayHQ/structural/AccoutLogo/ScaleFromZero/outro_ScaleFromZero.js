import React from 'react';
import styled from 'styled-components';
import { SpringToFrom } from '../../../Animation/RemotionSpring';
import { ImageWithFallback } from '../../../utils/global/ImageWithFallback';
import { useVideoDataContext } from '../../../context/VideoDataContext';
import { useLayoutContext } from '../../../context/LayoutContext';

const ClubNameContainer = styled.div`
  width: 100%;
  z-index: 2000;
  margin: 30px 0;
`;

const LogoContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 40px;
  z-index: 2000;
`;

export const OutroScaleFromZero = () => {
  const { DATA } = useVideoDataContext();
  const { TIMINGS } = useLayoutContext();

  const { FPS_OUTRO } = TIMINGS;
  const logoSrc = DATA.VIDEOMETA.Club.Logo;

  return (
    <ClubNameContainer>
      <LogoContainer
        style={{
          transform: `scale(${SpringToFrom(25, 0, 1, 'Wobbly')}) scale(${SpringToFrom(FPS_OUTRO - 15, 1, 0, 'Slow')})`,
        }}
      >
        <ImageWithFallback src={logoSrc} style={{ width: '120px' }} />
      </LogoContainer>
    </ClubNameContainer>
  );
};

export default OutroScaleFromZero;
