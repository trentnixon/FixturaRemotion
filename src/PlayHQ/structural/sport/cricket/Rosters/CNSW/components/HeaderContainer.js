import styled from 'styled-components';
import {useStylesContext} from '../../../../../../context/StyleContext';

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

export const HeaderContainer = ({matchData}) => {
	const {type, round, ground, date} = matchData;

	const {StyleConfig, BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;
	return (
		<TopContainer>
			<HeaderContainerStyles borderRadius={TemplateVariation.borderRadius}>
				<Ground
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
					}}
				>
					{ground}
				</Ground>
				<GameType
					style={{
						...Font.Copy,
						color: Color.Primary.Contrast,
					}}
				>
					{date} | {type} | {round}
				</GameType>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
