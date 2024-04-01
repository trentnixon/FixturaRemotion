import styled from 'styled-components';
import {getContrastColor, setOpacity} from '../../../utils/colors';
import {ImageWithFallback} from '../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../utils/copy';
import {
	LadderDataItem,
	LadderTeamName,
} from '../../../common/components/copy/commonAssetTypes';

const LadderPositionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	margin: 2px auto;
	padding: 5px 10px;
	width: 100%;
	height: ${(props) => props.Height}px;
	background-color: white;
	background-color: ${(props) => props.bgColor};
`;

const ImgContainer = styled.div``;

export const LadderPositionsContainer = (props) => {
	const {LadderItem, LadderDataPoints, PositionContainerStyles, RowStyles, CharacterLimit=32} =
		props;

	const {position, teamName, teamLogo} = LadderItem;

	return (
		<LadderPositionContainer style={PositionContainerStyles}>
			<ImgContainer style={RowStyles.Logo.ImgContainer}>
				<ImageWithFallback src={teamLogo} style={RowStyles.Logo.Img} />
			</ImgContainer>

			<LadderTeamName customStyles={{...RowStyles.Copy.Item}}>
				{position}. {restrictString(teamName, CharacterLimit)}
			</LadderTeamName>
			{LadderDataPoints.map((item, i) => {
				return (
					<LadderDataItem key={i} customStyles={{...RowStyles.Copy.DataItem}}>
						{LadderItem[item]}
					</LadderDataItem>
				);
			})}
		</LadderPositionContainer>
	);
};
