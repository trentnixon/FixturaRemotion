import {DisplayFixtureData} from './DisplayFixtureData';
import styled from 'styled-components';
import {LogoClubTitleHeaderVersion2} from '../../../../Components/Header/LogoClubTitleHeader';

const ColumnContainer = styled.div`
	display: flex;
	flex-direction: row;
	width: 45%;
	margin: 0 0 0 55%;
	height: auto;
	max-width: 100%;
	margin-bottom: 0px;
`;

export const Match = (props) => {
	const {VIDEOMETA} = props;
	return (
		<>
			<LogoClubTitleHeaderVersion2
				{...props}
				Labels={{
					small: VIDEOMETA.Club.Name,
					large: VIDEOMETA.Video.TitleSplit[0],
				}}
			/>
			<ColumnContainer>
				<DisplayFixtureData {...props} />
			</ColumnContainer>
		</>
	);
};
