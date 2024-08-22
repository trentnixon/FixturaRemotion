import styled from 'styled-components';
import {restrictString} from '../../../../utils/copy';
import {useStylesContext} from '../../../../context/StyleContext';

const TeamName = styled.h3`
	font-size: 1em;
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	text-align: left;
	margin-left: 110px;
	color: ${(props) => props.color};
`;

export const TeamNameDisplay = ({name}) => {
	const {StyleConfig} = useStylesContext();
	const {Color, Font} = StyleConfig;
	console.log("Font ", Font)
	return (
		<TeamName color={Color.Secondary.Contrast} style={{...Font.Copy}}>
			{restrictString(name, 32)}
		</TeamName>
	);
};
