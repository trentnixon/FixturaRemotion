import styled from 'styled-components';
import {getContrastColor} from '../../../../../utils/colors';

const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	height: auto;
	margin-top: 30px;
`;
const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
	margin: 5px 0;
`;

const GameType = styled(HeaderCopy)`
	font-size: 1.6em;
	text-align: center;
	font-weight: 400;
`;

const Ground = styled(HeaderCopy)`
	font-size: 1.5em;
	line-height: 1em;
	text-align: center;
`;

export const HeaderContainer = (props) => {
	const {matchData, THEME, fontFamily, TemplateVariation} = props;
	const {type, round, ground, date} = matchData;

	return (
		<TopContainer THEME={THEME}>
			<HeaderContainerStyles
				THEME={THEME}
				borderRadius={TemplateVariation.borderRadius}
			>
				<Ground
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(props.THEME.primary),
					}}
				>
					{ground}
				</Ground>
				<GameType
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(props.THEME.primary),
					}}
				>
					{date} | {type} | {round}
				</GameType>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
