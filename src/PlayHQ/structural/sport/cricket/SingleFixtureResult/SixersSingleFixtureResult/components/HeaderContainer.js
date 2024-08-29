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
	display: block;
	letter-spacing: -0.015em;
	text-transform: uppercase;
	width: 100%;
`;

const GameType = styled(HeaderCopy)`
	width: 15%;
`;

const Ground = styled(HeaderCopy)`
	text-align: center;
	width: 70%;
`;

const Round = styled(HeaderCopy)`
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;
	const {type, round, ground} = matchData;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Color} = StyleConfig;

	return (
		<HeaderContainerStyles borderRadius={TemplateVariation.borderRadius}>
			<GameType>
				<HeaderCopy
					style={{
						color: Color.Primary.Contrast,
						...StyleConfig.Font.Copy,
						...TextStyles.copyMedium,
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
						...TextStyles.copyMedium,
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
						...TextStyles.copyMedium,
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
