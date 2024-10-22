import styled from 'styled-components';

import {restrictString} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';
const TopContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: start;
	height: auto;
	margin-left: 0%;
	margin-right: 0%;
	bottom: 0px;
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
	flex-direction: column;
`;

const HeaderCopy = styled.p`
	display: block;
	text-transform: uppercase;
	width: 100%;
	margin: 10px 0;
`;

const Ground = styled(HeaderCopy)`
	text-align: center;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;
	const {ground, date} = matchData;
	const {StyleConfig, BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	const {Font, Color} = StyleConfig;

	return (
		<TopContainer backgroundColor={Color.Secondary.Darken}>
			<HeaderContainerStyles borderRadius={TemplateVariation.borderRadius}>
				<Ground
					style={{
						...Font.Copy,
						...TextStyles.copyMedium,
						color: Color.Secondary.Contrast,
					}}
				>
					{restrictString(ground, 60)}
				</Ground>
				<Ground
					style={{
						...Font.Copy,
						...TextStyles.copyMedium,
						color: Color.Secondary.Contrast,
					}}
				>
					{date}
				</Ground>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
