import styled from 'styled-components';
import {getContrastColor, darkenColor} from '../../../../../utils/colors';
import {useCurrentFrame} from 'remotion';
import {restrictString} from '../../../../../utils/copy';
const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: auto;
	margin-left: 0%;
	margin-right: 0%;
	position: absolute;
	width: 100%;
	background-color: ${(props) => darkenColor(props.THEME.secondary)};
	border-radius: ${(props) => props.borderRadius};
`;
const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0px;
	margin-top: 0px;
	background-color: ${(props) => darkenColor(props.THEME.secondary)};
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

const GameType = styled(HeaderCopy)`
	font-size: 1.6em;
	text-align: center;
	font-weight: 900;
`;

const Ground = styled(HeaderCopy)`
	font-size: 1.5em;
	line-height:1.1em;
	text-align: center;
`;

const Round = styled(HeaderCopy)`
	font-size: 1.5em;
	text-align: center;
`;

export const HeaderContainer = (props) => {
	const {matchData, THEME, fontFamily, TemplateVariation} = props;
	const {type, round, ground, date} = matchData;

	const frame = useCurrentFrame();
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
						color: getContrastColor(darkenColor(props.THEME.secondary)),
					}}
				>
					{date}
				</Ground>
			{/* 	<GameType
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(darkenColor(props.THEME.secondary)),
					}}
				>
					{round} : {type}
				</GameType> */}

				<Ground
					THEME={THEME}
					fontFamily={fontFamily}
					style={{
						color: getContrastColor(darkenColor(props.THEME.secondary)),
					}}
				>
					{ground}
				</Ground>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
