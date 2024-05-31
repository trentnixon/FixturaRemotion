// src/structural/Sponsors/Outro/SponsorRows.js

import { Img } from 'remotion';
import styled from 'styled-components';
import { useCurrentFrame } from 'remotion';
import { interpolateOpacityByFrame } from '../../../Animation/interpolate';
import { FromTopToBottom } from '../../../Animation/ClipWipe';
import { calculateImageDimensions, getPrimarySponsor, groupSponsors, calculateImgSize } from '../Utils/utils';

// Container for all sponsor rows
const SponsorsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Row container for general sponsors
const SponsorRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

// Container for each sponsor image
const SponsorImg = styled.div`
  width: ${(props) => props.width}; // Width is dynamically set based on number of sponsors
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SponsorLogo = ({ src, frame, FPS, IMGStyles, delay }) => {
  return (
    <Img
      src={src}
      style={{
        clipPath: FromTopToBottom(10 + delay, 'Wobbly'),
        opacity: interpolateOpacityByFrame(frame, FPS - 15, FPS, 1, 0),
        height: IMGStyles.height,
        width: IMGStyles.width,
        marginBottom: '10px',
      }}
    />
  );
};

const OutroSponsorsAsGrid = (props) => {
  const { DATA, FPS } = props;
  const frame = useCurrentFrame();

  

  if (!DATA || !DATA.VIDEOMETA || !DATA.VIDEOMETA.Club || !DATA.VIDEOMETA.Club.Sponsors) {
    console.error("Invalid data structure for sponsors");
    return null;
  } 

  const GeneralSponsors = DATA.VIDEOMETA.Club.Sponsors.default?.general_sponsors || [];
  const primarySponsor = getPrimarySponsor(DATA.VIDEOMETA.Club.Sponsors);

  if (!primarySponsor) return null;
  if(GeneralSponsors.length ===0) return false
  
  const PRIMARYIMGSIZING = [300, 300, 300];
  const LogoSize = calculateImageDimensions(primarySponsor.logo, PRIMARYIMGSIZING);

  const groupedSponsors = groupSponsors(GeneralSponsors);
  const imgSize = calculateImgSize(GeneralSponsors.length);

  return ( 
    <SponsorsContainer>
      <div>
        <SponsorLogo
          IMGStyles={LogoSize}
          src={primarySponsor.logo.url}
          frame={frame}
          FPS={FPS}
          delay={0}
        />
      </div>
      {groupedSponsors.map((row, rowIndex) => (
        <SponsorRow key={rowIndex}>
          {row.map((s, index) => (
            <SponsorImg key={index} width={`calc(100% / ${row.length})`}>
              <SponsorLogo
                IMGStyles={calculateImageDimensions(s.logo, [imgSize, imgSize, imgSize])}
                src={s.logo.url}
                frame={frame}
                FPS={FPS}
                Height={`${imgSize}px`}
                delay={(index + 1) * 5}
              />
            </SponsorImg>
          ))}
        </SponsorRow>
      ))}
    </SponsorsContainer>
  );
};

export default OutroSponsorsAsGrid;
