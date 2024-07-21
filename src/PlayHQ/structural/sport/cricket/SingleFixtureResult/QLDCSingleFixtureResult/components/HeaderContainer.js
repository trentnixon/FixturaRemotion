import styled from 'styled-components';
import {restrictString} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';
import {P} from '../../../../../../templates/QLDC/Components/Common/DEPRECATED_type';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const GameType = styled.div`
	width: 15%;
	font-weight: 900;
`;

const Ground = styled.div`
	text-align: center;
	width: 70%;
`;

const Round = styled.div`
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;
	const {type, round, ground} = matchData;

	const {StyleConfig} = useStylesContext();
	const {Font, Color} = StyleConfig;

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
			<GameType>
				<P {...defaultTextStyle}>{type}</P>
			</GameType>
			<Ground>
				<P {...defaultTextStyle}>{restrictString(ground, 40)}</P>
			</Ground>
			<Round>
				<P {...defaultTextStyle}>{round}</P>
			</Round>
		</HeaderContainerStyles>
	);
};
