// /components/SharedStyles.js
import styled from 'styled-components';

export const TeamsAndScoresContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  flex-direction: column;
  position: relative;
`;

export const TeamScoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  padding: 15px 0;
  background-color: ${(props) => props.bgColor};
  borderRadius: ${(props) => props.borderRadius};
`;

export const LogoHolder = styled.div`
  position: absolute;
  z-index: 1000;
`;
