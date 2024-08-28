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
	background-color: ${(props) => props.backgroundColor};
	border-radius: ${(props) => props.borderRadius};
	flex-direction: row;
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
			<HeaderContainerStyles
				backgroundColor={Color.Secondary.Darken}
				borderRadius={TemplateVariation.borderRadius}
			>
				<Ground
					style={{
						...Font.Copy,
						...TextStyles.copySmall,
						color: Color.Secondary.Contrast,
					}}
				>
					{date}
				</Ground>

				<Ground
					style={{
						...Font.Copy,
						...TextStyles.copySmall,
						color: Color.Secondary.Contrast,
					}}
				>
					{restrictString(ground, 35)}
				</Ground>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
