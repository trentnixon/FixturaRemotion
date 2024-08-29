import styled from 'styled-components';
import {ImageWithFallback} from '../../../../utils/global/ImageWithFallback';
import {restrictString} from '../../../../utils/copy';
import {
	LadderDataItem,
	LadderTeamName,
} from '../../../../common/components/copy/commonAssetTypes';
import {FromRightToLeft} from '../../../../Animation/ClipWipe';
import {useStylesContext} from '../../../../context/StyleContext';

const LadderPositionContainer = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	margin: 2px auto;
	padding: 5px 0 5px 10px;
	width: 100%;
	height: ${(props) => props.Height}px;
	background-color: transparent !important;
`;

const LadderContent = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-content: center;
	align-items: center;
	padding: 5px 10px;
	background-color: ${(props) => props.bgColor};
`;

const MetaContainer = styled.div`
	background-color: ${(props) => props.bgColor};
	height: ${(props) => props.Height}px;
	border-radius: ${(props) => props.borderRadius};
	width: 40%;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	align-items: center;
	padding: 5px 0;
`;
const ImgContainer = styled.div`
	min-width: 60px;
	height: 60px;
	margin: 0 10px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const LadderPositionsItemRowV3 = (props) => {
	const {
		LadderItem,
		LADDERINT,

		RowHeight,
		LadderDataPoints,
		PositionContainerStyles,
		RowStyles,
		CharacterLimit = 32,
	} = props;

	const {position, teamName, teamLogo} = LadderItem;
	const {StyleConfig} = useStylesContext();
	const {Color} = StyleConfig;

	return (
		<LadderPositionContainer style={PositionContainerStyles}>
			<ImgContainer style={RowStyles.Logo.ImgContainer}>
				<ImageWithFallback src={teamLogo} style={RowStyles.Logo.Img} />
			</ImgContainer>
			<LadderContent style={PositionContainerStyles}>
				<LadderTeamName customStyles={{...RowStyles.Copy.Item}}>
					{position}. {restrictString(teamName, CharacterLimit)}
				</LadderTeamName>
				<MetaContainer
					bgColor={Color.Primary.Main}
					Height={(RowHeight - 4) * 0.75}
					style={{clipPath: FromRightToLeft(30 + LADDERINT * 5, 'Slow')}}
					borderRadius={PositionContainerStyles.borderRadius}
				>
					{LadderDataPoints.map((item, i) => {
						return (
							<LadderDataItem
								key={i}
								customStyles={{...RowStyles.Copy.DataItem}}
							>
								{LadderItem[item]}
							</LadderDataItem>
						);
					})}
				</MetaContainer>
			</LadderContent>
		</LadderPositionContainer>
	);
};
