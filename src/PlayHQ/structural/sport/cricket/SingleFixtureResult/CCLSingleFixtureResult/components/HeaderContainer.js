import styled from 'styled-components';
import {P} from '../../../../../../templates/CoastalCricketLeague/Components/Common/DEPRECATED_type';
import {useStylesContext} from '../../../../../../context/StyleContext';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;
	const {StyleConfig} = useStylesContext();
	const {Font, Color} = StyleConfig;
	const {result} = matchData;

	const defaultTextStyle = {
		...Font.Copy,

		display: 'block',
		fontSize: '1.5em',
		letterSpacing: '-0.015em',
		textTransform: 'uppercase',
		width: '100%',
		color: Color.Primary.Contrast,
		textAlign: 'center',
	};
	return (
		<HeaderContainerStyles>
			<P {...defaultTextStyle}>{result}</P>
		</HeaderContainerStyles>
	);
};
