import styled from 'styled-components';
import {P} from '../../../../Components/Common/DEPRECATED_type';

const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: auto;
	margin-top: 30px;
`;
const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 80%;
`;

export const HeaderContainer = (props) => {
	const {matchData, StyleConfig} = props;
	const {type, round, ground, date} = matchData;
	const {Font, Color} = StyleConfig;

	const MetaStyles = {
		...Font.Copy,
		color: Color.Primary.Contrast,
		fontSize: '1.45em',
		lineHeight: '1em',
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: '20px',
	};
	return (
		<TopContainer>
			<HeaderContainerStyles>
				<P {...MetaStyles}>
					{date} | {type} | {round}
				</P>
				<P {...MetaStyles}>{ground}</P>
			</HeaderContainerStyles>
		</TopContainer>
	);
};
