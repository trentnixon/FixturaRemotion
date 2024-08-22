import styled from 'styled-components';
import {getContrastColor} from '../../../../utils/colors';
import {useStylesContext} from '../../../../context/StyleContext';

const InningsScore = styled.div``;

// Expend  the styles from InningsScore

const Runs = styled.h3`
	color: ${(props) => props.color};
	font-size: 1.2em;
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`;

const Overs = styled.h3`
	font-size: 1em;
	line-height: 1em;
	font-weight: 400;
	margin: 0;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
	color: ${(props) => props.color};
`;

export const DisplayInningsScore = (props) => {
	const {FirstInnings, Type, score, overs} = props;
	const {StyleConfig} = useStylesContext();
	const {Color, Font} = StyleConfig;

	return (
		<>
			<InningsScore style={{...Font.Copy}}>
				<Runs
					color={getContrastColor(Color.Primary.Darken)}
					style={{...Font.Copy}}
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

/* Const TeamScore = styled.h3`
	line-height: 1em;
	font-weight: 900;
	margin: 0;
	text-align: right;
	letter-spacing: 0em;
	text-transform: uppercase;
	font-family: ${(props) => props.fontFamily};
`; */

/* const FirstInningsRuns = styled(TeamScore)`
	font-weight: 400;
`;
 */
