import styled from 'styled-components';

import {restrictString} from '../../../../../../utils/copy';
const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: auto;
	margin-left: 0%;
	margin-right: 0%;
	position: absolute;
	width: 100%;
	background-color: ${(props) => props.backgroundColor};
	border-radius: ${(props) => props.borderRadius};
`;
const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	margin-top: 0px;
	background-color: ${(props) => props.backgroundColor};
	border-radius: ${(props) => props.borderRadius};
	flex-direction: row;
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	margin: 10px 0;
`;

const Ground = styled(HeaderCopy)`
	font-size: 1.5em;
	line-height: 1.1em;
	text-align: center;
`;

export const HeaderContainer = (props) => {
	const {matchData, TemplateVariation, StyleConfig} = props;
	const {ground, date} = matchData;
	const {Font, Color} = StyleConfig;

	return (
		<TopContainer backgroundColor={Color.Secondary.Darken}>
			<HeaderContainerStyles
				backgroundColor={Color.Secondary.Darken}
				borderRadius={TemplateVariation.borderRadius}
			>
				<Ground
					style={{
						...Font.Copy,
						color: Color.Secondary.Contrast,
					}}
				>
					{date}
				</Ground>

				<Ground
					style={{
						...Font.Copy,
						color: Color.Secondary.Contrast,
					}}
				>
					{restrictString(ground, 35)}
				</Ground>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
