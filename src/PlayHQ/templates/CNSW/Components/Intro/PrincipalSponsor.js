// Importing necessary libraries and components
import styled from 'styled-components';
import { Img } from 'remotion';
import { SpringToFrom } from '../../../../Animation/RemotionSpring';
import { EraseToMiddleFromTop } from '../../../../Animation/ClipWipe';
import { HeaderLogo } from '../Header/Logo';
import { calculateImageDimensions } from '../../../../utils/global/calculateImageDimensions';

// Refactored to avoid code duplication by creating a reusable function
const getPrimarySponsor = (sponsorList) => sponsorList?.find((sponsor) => sponsor.isPrimary === true);

// PrincipalSponsor component
export const PrincipalSponsor = ({ FPS_INTRO, VIDEOMETA }) => {
  const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);
  if (!PrincipalSponsorIs) return null; // Changed from 'false' to 'null' for React components

  const IMGSIZING = [140, 180, 140];
  const PrimarySponsorStyles = calculateImageDimensions(PrincipalSponsorIs.Logo, IMGSIZING);

  return (
    <PrincipalLogo
      style={{
        transform: `translateY(${SpringToFrom(0, 300, 0, 'Wobbly')}px)`,
        clipPath: EraseToMiddleFromTop(FPS_INTRO - 20, 'Slow'),
      }}
    >
      <PrincipalLogoImg>
        <Img src={PrincipalSponsorIs.Logo.url} style={PrimarySponsorStyles} />
      </PrincipalLogoImg>
    </PrincipalLogo>
  );
};

// PrincipalSponsorAlwaysShow component
export const PrincipalSponsorAlwaysShow = ({ VIDEOMETA, FPS_MAIN }) => {
  const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);
  if (!PrincipalSponsorIs) return null;

  const IMGSIZING = [140, 180, 140];
  const PrimarySponsorStyles = calculateImageDimensions(PrincipalSponsorIs.Logo, IMGSIZING);

  console.log(VIDEOMETA )

  return (
    <PrincipalLogo>
      <HeaderLogo LOGO={VIDEOMETA.Club.Logo.url} FPS_MAIN={FPS_MAIN} />
      <PrincipalLogoImg>
        <Img src={PrincipalSponsorIs.Logo.url} style={PrimarySponsorStyles} />
      </PrincipalLogoImg>
    </PrincipalLogo>
  );
};

// PrincipalBodySponsor component
export const PrincipalBodySponsor = ({ VIDEOMETA, FPS_MAIN }) => {
  const PrincipalSponsorIs = getPrimarySponsor(VIDEOMETA.Club.Sponsors);
  if (!PrincipalSponsorIs) return null;

  const IMGSIZING = [110, 140, 110];
  const PrimarySponsorStyles = calculateImageDimensions(PrincipalSponsorIs.Logo, IMGSIZING);

  return (
    <PrincipalBodyLogo
      style={{
        transform: `translateY(${SpringToFrom(0, 1300, 0, 'Wobbly')}px)`,
      }}
    >
      <HeaderLogo LOGO={VIDEOMETA.Club.Logo.url} FPS_MAIN={FPS_MAIN} /> 
      <PrincipalLogoImg>
        <Img src={PrincipalSponsorIs.Logo.url} style={PrimarySponsorStyles} />
      </PrincipalLogoImg>
    </PrincipalBodyLogo>
  );
};

// Styled components
const PrincipalLogo = styled.div`
  position: absolute;
  height: 150px;
  width: 100%;
  left: 0px;
  bottom: 3px;
  z-index: 2000;
  flex-direction: row;
  justify-content: center;
  display: flex;
  align-items: center;
`;

const PrincipalLogoImg = styled.div`
  flex-direction: column;
  justify-content: start;
  display: flex;
  align-items: start;
  width: auto;
`;

const PrincipalBodyLogo = styled.div`
  position: absolute;
  height: 120px;
  width: 100%;
  left: 5%;
  bottom: 10px;
  z-index: 2000;
  flex-direction: row;
  justify-content: flex-start;
  display: flex;
  align-items: center;
`;

// Dev Notes:
// - Refactored to eliminate redundant code by creating a shared utility function getPrimarySponsor.
// - Updated component return values from 'false' to 'null' for proper React component rendering.
// - Encapsulated repeated styles into styled components to improve maintainability.
// - Future improvements could include further abstraction of shared component logic and enhancing the responsiveness of styled components.

// Context:
// These components are designed to display logos of principal sponsors in different parts of a video production tool. They utilize animations and image processing utilities to adjust the display based on provided metadata. Positioned within a larger application structure, they likely reside in a components directory related to sponsor display functionality.
