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
	align-items: flex-start;
	flex-direction: column;
	width: 100%;
`;

const HeaderCopy = styled.p`
	display: block;
	text-transform: uppercase;
	width: 100%;
	margin: 5px 0;
`;

const GameType = styled(HeaderCopy)`
	text-align: left;
`;

const Ground = styled(HeaderCopy)`
	text-align: left;
`;

export const HeaderContainer = ({matchData}) => {
	const {type, round, ground, date} = matchData;

	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;

	return (
		<TopContainer>
			<HeaderContainerStyles borderRadius={TemplateVariation.borderRadius}>
				<GameType
					style={{
						...Font.Copy,
						...TextStyles.copyXSmallBold,
						color: Color.Primary.Contrast,
					}}
				>
					{date} | {type} | {round}
				</GameType>
				<Ground
					style={{
						...Font.Copy,
						...TextStyles.copyXSmallBold,
						color: Color.Primary.Contrast,
					}}
				>
					{ground}
				</Ground>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
