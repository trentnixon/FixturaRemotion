import styled from 'styled-components';
import {restrictString} from '../../../../../../utils/copy';
import {useStylesContext} from '../../../../../../context/StyleContext';

const HeaderContainerStyles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0;
`;

const HeaderCopy = styled.div`
	font-family: ${(props) => props.fontFamily};
	display: block;
	text-transform: uppercase;
	width: 100%;
	padding: 5px 0;
`;

const GameType = styled(HeaderCopy)`
	width: 15%;
	font-weight: 900;
`;

const Ground = styled(HeaderCopy)`
	text-align: center;
	width: 70%;
`;

const Round = styled(HeaderCopy)`
	width: 15%;
	text-align: right;
`;

export const HeaderContainer = (props) => {
	const {matchData} = props;
	const {type, round, ground} = matchData;

	const {BuildProps, TextStyles} = useStylesContext();
	const {TemplateVariation} = BuildProps;
	return (
		<HeaderContainerStyles>
			<GameType>
				<HeaderCopy
					style={{
						color: TemplateVariation.useMutedColor,

						...TextStyles.copyXSmall,
					}}
				>
					{type}
				</HeaderCopy>
			</GameType>
			<Ground>
				<HeaderCopy
					style={{
						color: TemplateVariation.useMutedColor,

						...TextStyles.copyXSmall,
					}}
				>
					{restrictString(ground, 35)}
				</HeaderCopy>
			</Ground>
			<Round>
				<HeaderCopy
					style={{
						color: TemplateVariation.useMutedColor,

						...TextStyles.copyXSmall,
					}}
				>
					{round}
				</HeaderCopy>
			</Round>
		</HeaderContainerStyles>
	);
};
