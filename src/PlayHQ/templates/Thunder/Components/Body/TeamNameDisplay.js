import styled from 'styled-components';
import {restrictString} from '../../../../utils/copy';
import {useStylesContext} from '../../../../context/StyleContext';

const TeamName = styled.h3`
	font-weight: 100;
	margin: 0;
	text-transform: uppercase;
	text-align: left;
	margin-left: 110px;
	color: ${(props) => props.color};
`;

export const TeamNameDisplay = ({name}) => {
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color, Font} = StyleConfig;
	return (
		<TeamName
			color={Color.Secondary.Main}
			style={{
				...Font.Copy,
				...TextStyles.copySmall,
			}}
		>
			{restrictString(name, 32)}
		</TeamName>
	);
};
