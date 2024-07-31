// /components/SharedStyles.js
import styled from 'styled-components';

export const TeamsAndScoresContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 10px 0 ;
	width: 100%;
	flex-direction: row;
	position: relative;
`;

export const TeamScoreContainer = styled.div`
	display: flex;
	flex-direction: column;
	position: relative;
	width: 100%;
	padding: 15px 0;
`;

export const LogoHolder = styled.div`
	position: absolute;
	z-index: 1000;
`;
