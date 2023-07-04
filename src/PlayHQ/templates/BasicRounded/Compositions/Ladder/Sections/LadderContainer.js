
import styled from 'styled-components';
const LadderContainerStyles = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 1200px;
  max-width: 100%;
  margin: 0 auto;

`;

export const LadderContainer = (props)=>{
  return(<LadderContainerStyles>{props.children}</LadderContainerStyles>)
}
