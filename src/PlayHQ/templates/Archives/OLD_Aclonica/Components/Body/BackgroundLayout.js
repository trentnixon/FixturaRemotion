import React from 'react';
import styled from 'styled-components';
import {darkenColor} from '../../../../../utils/colors';

// Column containers
const LeftColumn = styled.div`
	background-image: url('${(props) => props.BGIMG.url}');
	background-size: cover;
	background-position: center center;
`;

const MiddleColumn = styled.div`
	background-color: ${(props) => props.BGColor};
`;

const RightColumn = styled.div`
	background-color: ${(props) => props.BGColor};
`;

// Footer container
const FooterContainer = styled.div`
	position: absolute;
	bottom: 0;
	width: 100%;
	display: grid;
	grid-template-rows: 20px 40px 80px;
`;

// Rows for the footer
const TopRow = styled.div`
	background-color: ${(props) => props.BGColor};
`;

const MiddleRow = styled.div`
	background-color: ${(props) => props.BGColor};
`;

const BottomRow = styled.div`
	background-color: ${(props) => props.BGColor};
`;

const BackgroundContainer = styled.div`
	z-index: 10;
	position: absolute;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	height: 1350px;
	width: 100%;
`;

const BackgroundLayout = (props) => {
	const {THEME, VIDEOMETA} = props;
	return (
		<BackgroundContainer>
			<LeftColumn BGIMG={VIDEOMETA.Video.HeroImage} />
			<MiddleColumn BGColor={THEME.primary} />
			<RightColumn BGColor={darkenColor(THEME.primary)} />
			<FooterContainer>
				<TopRow BGColor={darkenColor(darkenColor(THEME.secondary))} />
				<MiddleRow BGColor={darkenColor(THEME.secondary)} />
				<BottomRow BGColor={THEME.secondary} />
			</FooterContainer>
		</BackgroundContainer>
	);
};

export default BackgroundLayout;
