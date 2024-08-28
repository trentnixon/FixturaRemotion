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
	display: block;
	text-transform: uppercase;
	width: 100%;
`;

const GameType = styled(HeaderCopy)`
	width: 20%;
`;

const Ground = styled(HeaderCopy)`
	text-align: center;
	width: 60%;
`;

const Round = styled(HeaderCopy)`
	width: 20%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
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
						...TextStyles.copySmall,
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
						...TextStyles.copySmall,
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
						...TextStyles.copySmall,
						color: Color.Primary.Contrast,
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
