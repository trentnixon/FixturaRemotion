import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {useStylesContext} from '../../../../context/StyleContext';

const InningsScore = styled.div``;

// Expend  the styles from InningsScore

const Runs = styled.h3`
	color: ${(props) => props.color};
	margin: 0;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Overs = styled.h3`
	margin: 0;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
`;

export const DisplayInningsScore = (props) => {
	const {firstInnings, Type, score, overs} = props;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Color, Font} = StyleConfig;

	return (
		<>
			<InningsScore style={{...Font.Copy}}>
				<Runs
					color={getContrastColor(Color.Primary.Darken)}
					style={{...Font.Copy, ...TextStyles.copyMediumBold}}
				>
					<FirstInningsScore Type={Type} firstInnings={firstInnings} />{' '}
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
	const {firstInnings, Type} = props;
	if (Type !== 'Two Day+' || firstInnings === '1') return false;
	return firstInnings;
};
