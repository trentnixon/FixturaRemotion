import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {useStylesContext} from '../../../../context/StyleContext';

const InningsScore = styled.h3`
	margin: 0;
	text-transform: uppercase;
`;

const Runs = styled.h3`
	color: ${(props) => props.color};
	margin: 0;
	text-transform: uppercase;
`;

const Overs = styled.h3`
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
			<InningsScore style={{...Font.Copy}}>
				<Runs
					color={getContrastColor(Color.Primary.Darken)}
					style={{...Font.Copy, ...TextStyles.copyMediumBold}}
				>
					<FirstInningsScore Type={Type} FirstInnings={FirstInnings} />
					{score}
				</Runs>

				{overs && (
					<Overs
						color={getContrastColor(Color.Primary.Darken)}
						style={{...Font.Copy}}
					>{`(${overs})`}</Overs>
				)}
			</InningsScore>
		</>
	);
};

const FirstInningsScore = (props) => {
	const {FirstInnings, Type} = props;
	if (Type !== 'Two Day+' || FirstInnings === '1') return false;
	return FirstInnings;
};
