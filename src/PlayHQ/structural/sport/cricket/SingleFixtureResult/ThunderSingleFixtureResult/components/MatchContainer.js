
import styled from 'styled-components';
const MatchContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  max-width: 100%;
  margin: 10px auto;
  margin-bottom:0px;
`;

export const MatchContainer = (props)=>{
  return(<MatchContainerStyles>{props.children}</MatchContainerStyles>)
}
