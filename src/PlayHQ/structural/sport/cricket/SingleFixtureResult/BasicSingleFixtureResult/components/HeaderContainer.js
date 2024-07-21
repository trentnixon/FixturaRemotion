import styled from 'styled-components';
import {restrictString} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	height: 60px;
	padding: 0 10px;
	margin-top: 50px;
	background-color: ${(props) => props.BackgroundColor};
	border-radius: ${(props) => props.borderRadius};
`;

const HeaderCopy = styled.p`
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
	const {matchData} = props;

	const {StyleConfig, BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;
	const {type, round, ground} = matchData;

	return (
		<HeaderContainerStyles
			BackgroundColor={Color.Primary.Darken}
			borderRadius={TemplateVariation.borderRadius}
		>
			<GameType>
				<HeaderCopy
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
					}}
				>
					{type}
				</HeaderCopy>
			</GameType>
			<Ground>
				<HeaderCopy
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
					}}
				>
					{restrictString(ground, 40)}
				</HeaderCopy>
			</Ground>
			<Round>
				<HeaderCopy
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
