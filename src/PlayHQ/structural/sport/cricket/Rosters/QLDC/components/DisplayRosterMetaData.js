import styled from 'styled-components';
import {P} from '../../../../../../templates/QLDC/Components/Common/DEPRECATED_type';
import {useStylesContext} from '../../../../../../context/StyleContext';

const TopContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	height: auto;
	margin-top: 30px;
	width: 100%;
`;
const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
`;

export const DisplayRosterMetaData = ({matchData}) => {
	const {type, round, ground, date} = matchData;
	const {StyleConfig, TextStyles} = useStylesContext();
	const {Font, Color} = StyleConfig;

	const MetaStyles = {
		...Font.Copy,
		...TextStyles.copyMedium,
		color: Color.Primary.Contrast,
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
