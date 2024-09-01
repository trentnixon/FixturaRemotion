import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {useStylesContext} from '../../../../context/StyleContext';

const InningsScore = styled.h3`
	margin: 0;
	text-transform: uppercase;
	color: ${(props) => props.color};
`;

export const DisplayInningsScore = (props) => {
	const {FirstInnings, Type, score, overs} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color, Font} = StyleConfig;

	return (
		<>
			<InningsScore
				style={{...Font.Copy, ...TextStyles.copyMediumBold}}
				color={getContrastColor(Color.Primary.Darken)}
			>
				<FirstInningsScore Type={Type} FirstInnings={FirstInnings} />
				{score}
				{overs && `(${overs})`}
			</InningsScore>
		</>
	);
};

const FirstInningsScore = (props) => {
	const {FirstInnings, Type} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return FirstInnings;
};
