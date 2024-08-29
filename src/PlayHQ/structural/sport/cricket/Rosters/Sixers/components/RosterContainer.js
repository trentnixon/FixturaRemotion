
import styled from 'styled-components';
const RosterContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 100%;
  margin: 0 auto;
  margin-bottom:0px;
`;

export const RosterContainer = (props)=>{
  return(<RosterContainerStyles>{props.children}</RosterContainerStyles>)
}
