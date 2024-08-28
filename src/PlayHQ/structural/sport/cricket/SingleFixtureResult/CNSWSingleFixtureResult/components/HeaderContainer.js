import styled from 'styled-components';
import {restrictString} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

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
	const {type, round, ground} = matchData;

	const {StyleConfig, TextStyles, BuildProps} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Color} = StyleConfig;

	return (
		<HeaderContainerStyles borderRadius={TemplateVariation.borderRadius}>
			<GameType>
				<HeaderCopy
					style={{
						color: Color.Primary.Contrast,
						...StyleConfig.Font.Copy,
						...TextStyles.copySmall,
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
						...TextStyles.copySmall,
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
						...TextStyles.copySmall,
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
