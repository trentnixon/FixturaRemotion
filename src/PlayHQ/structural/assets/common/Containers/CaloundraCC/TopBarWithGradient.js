import styled from "styled-components";

export const TopBarWithGradient = styled.div`
width: 70%;
margin: 0 15%;
margin-bottom: -3px;
background-color: white;
border-radius: 100px 100px 0 0;
padding: 3px;
text-align: center;
background: ${(props) => props.Gradient};
border:3px solid white;
font-family: 'Arial';
font-weight: 600;
font-size: 25px;
`;