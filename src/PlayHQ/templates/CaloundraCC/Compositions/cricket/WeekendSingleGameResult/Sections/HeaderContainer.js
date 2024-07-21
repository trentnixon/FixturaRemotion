import styled from 'styled-components';
import {restrictString} from '../../../../../../utils/copy';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 10px;
	margin-top: 0px;
`;

const HeaderCopy = styled.p`
	font-family: ${(props) => props.fontFamily};
	font-style: normal;
	font-weight: 400;
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
`;

const GameType = styled(HeaderCopy)`
	font-size: 1.4em;
	width: 15%;
	font-weight: 900;
`;

const Ground = styled(HeaderCopy)`
	font-size: 1.4em;
	text-align: center;
	width: 70%;
`;

const Round = styled(HeaderCopy)`
	font-size: 1.4em;
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData, TemplateVariation, StyleConfig} = props;
	const {type, round, ground} = matchData;
	const {Color} = StyleConfig;

	return (
		<HeaderContainerStyles borderRadius={TemplateVariation.borderRadius}>
			<GameType>
				<HeaderCopy
					style={{
						color: Color.Primary.Contrast,
						...StyleConfig.Font.Copy,
					}}
				>
					{type}
				</HeaderCopy>
			</GameType>
			<Ground>
				<HeaderCopy
					style={{
						color: Color.Primary.Contrast,
						...StyleConfig.Font.Copy,
					}}
				>
					{restrictString(ground, 40)}
				</HeaderCopy>
			</Ground>
			<Round>
				<HeaderCopy
					style={{
						color: Color.Primary.Contrast,
						...StyleConfig.Font.Copy,
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
